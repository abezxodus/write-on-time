class Api::V1::ProjectsController < ApiController
  before_action :authenticate_user!

  def index
    project = current_user.projects
    render json: project
  end

  def show
    project = current_user.projects.find(params[:id])
    assignments = project.assignments
    render json: {project: project, assignments: assignments}
  end

  def create
    newProject = Project.new(project_params)
    newProject.save
    current_user.projects.push(newProject)
    render json: newProject
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end
end
