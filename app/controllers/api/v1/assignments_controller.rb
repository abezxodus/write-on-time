class Api::V1::AssignmentsController < ApiController
  before_action :authenticate_user!

  def show
    assignment = Assignment.find(params[:id])
    render json: assignment
  end

  def create
    assignment = Assignment.new(assignment_params)
    if(current_user.email.include?("gmail"))
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
    project = assignment.project
    render json: project
  end

  private

  def assignment_params
    params.require(:assignment).permit(:name, :due_date, :note, :page_count_req, :word_count_req, :email_reminder, :text_reminder, :project_id, :open, :google_calendar)
  end
end
