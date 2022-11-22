import React, { useState, useEffect } from "react"
import ProjectShowTile from "./ProjectShowTile"
import { Link } from "react-router-dom"
import NewProjectFormContainer from "./NewProjectFormContainer"

const ProjectShowContainer = (props) => {
  const [project, setProject] = useState({})
  const [newAssignment, setNewAssignment] = useState(false)

  const fetchProject = async () => {
    try {
      const url = props.match.params.id
      const response = await fetch(`/api/v1/projects/${url}`, {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedProject = await response.json()
        setProject(parsedProject)
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchProject()
  }, [])

  let projectDisplay

  if(newAssignment == true){
    projectDisplay = <NewProjectFormContainer
                      project={project}
                      />
  } else if(project.project){
    projectDisplay = <ProjectShowTile
                      projectPackage={project.project}
                      assignmentPackage={project.assignments}
                    />
  }

  let editDisplay
  if(project.project){
    if(project.project.open == true){
      editDisplay = <Link to={`/projects/${project.project.id}/edit`}>Edit or Close Project</Link>
    } else {
      editDisplay = <Link to={`/projects/${project.project.id}/edit`}>Edit or Reopen Project</Link>
    }
  }

  // const handleInputChange = (event) => {
  //   setNewAssignment(event.currentTarget.checked)
  // }

  return(
    <div>
      <h2  className="blur-header">Project Details</h2>
      {/* <form>
        <label className="cell large-4" htmlFor="open">
          Ass New Assignment
          <input id="open" type="checkbox" name="open" onChange={handleInputChange}/>
        </label>
      </form> */}
      {projectDisplay}
      {editDisplay}
    </div>
  )
}

export default ProjectShowContainer