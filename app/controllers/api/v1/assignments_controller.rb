class Api::V1::AssignmentsController < ApiController
  before_action :authenticate_user!

  def show
    assignment = Assignment.find(params[:id])
    render json: assignment
  end

  def create
    assignment = Assignment.new(assignment_params)
    if(current_user.email.include?("michaeltrainor.mt@gmail.com"))
      assignment[:google_calendar] = true
    end
    if(assignment.save)
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
    streak_count = current_user.streak_count
    total_assignments = current_user.total_assignments + 1
    total_on_time = current_user.total_on_time
    total_late = current_user.total_late
    word_count = current_user.word_count+ assignment.word_count_req.to_i
    page_count = current_user.page_count + assignment.page_count_req.to_i

    if(assignment.open == false)
      if(assignment.past_due == false)
        streak_count += 1
        total_on_time += 1
        current_user.update(streak_count: streak_count, 
                            total_on_time: total_on_time,
                            total_assignments: total_assignments,
                            word_count: word_count,
                            page_count: page_count)
      else
        total_late += 1
        current_user.update(streak_count: 0, total_late: total_late)
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
