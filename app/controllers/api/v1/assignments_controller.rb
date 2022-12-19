require 'approvedemails.rb'
require 'date'

class Api::V1::AssignmentsController < ApiController
  before_action :authenticate_user!

  def show
    assignment = Assignment.find(params[:id])
    if(assignment.open == true && assignment.past_due == false && assignment.due_date < Date.today)
      assignment.update(past_due: true)
      new_assignments_open_past_due = current_user.stat["assignments_open_past_due"] + 1
      current_user.stat.update(assignments_open_past_due: new_assignments_open_past_due,
                              submission_streak: 0
                              )
    end
    render json: assignment
  end 

  def create
    assignment = Assignment.new(assignment_params)
    email = ApprovedEmails.new(current_user.email)
    assignment[:google_calendar] = email.emailcheck
    if(assignment.save)
      new_assignments_open_on_track = current_user.stat["assignments_open_on_track"] + 1
      current_user.stat.update(assignments_open_on_track: new_assignments_open_on_track)
      render json: assignment
    else
      render json: { errors: assignment.errors.full_messages }
    end
  end

  def edit
    assignment = Assignment.find(params[:id])
    render json: assignment
  end

  def update
    assignment = Assignment.find(params[:id])
    assignment.update(assignment_params)

    current_project = assignment.project
    projectCloseable = true
    current_project.assignments.each do |assignment|
      if(assignment.open == true)
        projectCloseable = false
      end
    end
    current_project.update(closeable: projectCloseable)

    if(assignment.open == false)
      total_word_count = current_user.stat["total_word_count"] + assignment.word_count_req.to_i
      total_page_count = current_user.stat["total_page_count"] + assignment.page_count_req.to_i

      if(current_user.stat.timelines.last["year"] != Time.now.year || current_user.stat.timelines.last["month"] != Time.now.month)
        current_timeline = Timeline.create(year: Time.now.year,
                                    month: Time.now.month,
                                    words: total_word_count,
                                    pages: total_page_count,
                                    assignments: 1,
                                    streaks: 0,
                                    stat_id: current_user.stat.id
                                  )
      else
        current_timeline = Timeline.last
        new_assignments = current_timeline["assignments"] + 1
        current_timeline.update(words: total_word_count,
                                pages: total_page_count,
                                assignments: new_assignments
                              )
      end

      if(assignment.past_due == false)
        new_submission_streak = current_user.stat["submission_streak"] + 1
        new_assignments_closed_on_time = current_user.stat["assignments_closed_on_time"] + 1
        new_assignments_open_on_track = current_user.stat["assignments_open_on_track"] - 1
        current_user.stat.update(submission_streak: new_submission_streak, 
                            assignments_closed_on_time: new_assignments_closed_on_time,
                            assignments_open_on_track: new_assignments_open_on_track,
                            total_word_count: total_word_count,
                            total_page_count: total_page_count
                            )
        if(new_submission_streak > current_timeline["streaks"])
          current_timeline.update(streaks: new_submission_streak)
        end
      else
        new_assignments_closed_late = current_user.stat["assignments_closed_late"] + 1
        new_assignments_open_past_due = current_user.stat["assignments_open_past_due"] - 1
        current_user.stat.update(assignments_closed_late: new_assignments_closed_late,
                            assignments_open_past_due: new_assignments_open_past_due,
                            total_word_count: total_word_count,
                            total_page_count: total_page_count
                            )
      end
    end

    project = assignment.project
    render json: project
  end

  private

  def assignment_params
    params.require(:assignment).permit(:name, :due_date, :note, :page_count_req, :word_count_req, :email_reminder, :text_reminder, :project_id, :open, :google_calendar)
  end
end