class Api::V1::AssignmentsController < ApiController
  before_action :authenticate_user!

  def show
    assignment = Assignment.find(params[:id])
    render json: assignment
  end

  def create
    assignment = Assignment.new(assignment_params)
    assignment.save
    render json: assignment
  end

  def edit
    assignment = Assignment.find(params[:id])
    render json: assignment
  end

  def update
    assignment = Assignment.find(params[:id])
    assignment.update(assignment_params)
    binding.pry
    assignment[:edit] = ""
    binding.pry
    render json: assignment
  end

  private

  def assignment_params
    params.require(:assignment).permit(:name, :due_date, :note, :page_count_req, :word_count_req, :email_reminder, :text_reminder, :project_id)
  end
end
