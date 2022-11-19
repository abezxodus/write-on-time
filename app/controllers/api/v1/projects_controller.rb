class Api::V1::ProjectsController < ApiController
  before_action :authenticate_user!

  def index
    projects = current_user.projects
    projectsArray = []
    projects.each do |project|
      projectHash = {project: project, assignments: project.assignments}
      projectsArray.push(projectHash)
    end

    render json: projectsArray
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
