class Api::V1::ProjectsController < ApiController
  before_action :authenticate_user!

  def index
    projects = current_user.projects.reverse()
    projectsArray = []
    projects.each do |project|
      project.assignments.each do |assignment|
        if(assignment.open == true && assignment.past_due == false && assignment.due_date < Date.today)
          assignment.update(past_due: true)
        end
      end
      projectHash = {project: project, assignments: project.assignments}
      projectsArray.push(projectHash)
    end

    render json: projectsArray
  end

  def show
    project = current_user.projects.find(params[:id])
    project.assignments.each do |assignment|
      if(assignment.open == true && assignment.past_due == false && assignment.due_date < Date.today)
        assignment.update(past_due: true)
      end
    end
    assignments = project.assignments.reverse()
    render json: {project: project, assignments: assignments}
  end

  def create
    newProject = Project.new(project_params)
    newProject.save
    current_user.projects.push(newProject)
    render json: newProject
  end

  def edit
    project = Project.find(params[:id])
    render json: project
  end

  def update
    project = Project.find(params[:id])
    project.update(project_params)
    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :open)
  end
end
