class Api::V1::AssignmentController < ApiController

  def create
    newAssignment = Assignment.new(assignment_params)
    newAssignment.save
    render json: newAssignment
  end

  private

  def assignment_params
    params.require(:assignment).permit(:assignment_name, :due_date, :note, :page_count_req, :word_count_req, :email_reminder, :text_reminder, :google_calendar, :project_id)
  end
end
