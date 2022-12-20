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
    newProject["user_id"] = current_user.id
    newProject["closeable"] = true
    if(newProject.save)
      if(current_user.projects.length == 1)
        new_stat = Stat.create
        new_stat.update(user_id: current_user.id)
      end
      new_open_projects = current_user.stat["projects_open"] + 1
      current_user.stat.update(projects_open: new_open_projects)
      render json: newProject
    else
      render json: { errors: newProject.errors.full_messages }
    end
  end

  def edit
    project = Project.find(params[:id])
    render json: project
  end

  def update
    project = Project.find(params[:id])
    before_open_status = project["open"]
    project.update(project_params)
    after_open_status = project["open"]
    if before_open_status != after_open_status
      if project["open"] == false
        new_open_projects = current_user.stat["projects_open"] - 1
        new_closed_projects = current_user.stat["projects_closed"] + 1
      else
        new_open_projects = current_user.stat["projects_open"] + 1
        new_closed_projects = current_user.stat["projects_closed"] - 1
      end
      current_user.stat.update(projects_open: new_open_projects, projects_closed: new_closed_projects)
    end

    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :open)
  end
end
