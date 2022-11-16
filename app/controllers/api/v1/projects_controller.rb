class Api::V1::ProjectsController < ApiController

  def index
    project = Project.all
    render json: project
  end

  def show
    project = Project.find(params[:id])
    assignments = project.assignments
    render json: {project: project, assignments: assignments}
  end

  def create
    newProject = Project.new(project_params)
    newProject.save
    render json: newProject
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end
end
