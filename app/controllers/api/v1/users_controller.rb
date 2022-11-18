class Api::V1::UsersController < ApiController
  before_action :authenticate_user!

  def index
    user = current_user
    projects = user.projects

    userProjects = {user: user, projects: []}

    user.projects.each do |project|
      projectAndAssignment = []
      projectAndAssignment.push(project)
      projectAndAssignment.push(project.assignments)
      userProjects[:projects].push(projectAndAssignment)
    end

    render json: userProjects
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end
end