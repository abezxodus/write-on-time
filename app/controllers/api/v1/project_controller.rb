class Api::V1::ProjectController < ApiController

  def index
    project = Project.last
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
