import React, {useEffect, useState} from "react"
import ProjectIndexTile from "./ProjectIndexTile"

const ProjectIndexContainer = (props) => {
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    try{
      const response = await fetch("api/v1/projects")
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } const parsedProjects = await response.json()
      setProjects(parsedProjects)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const mappedProjects = projects.map((project) => {
    return (
      <ProjectIndexTile
        key={project.id}
        project={project}
      />
    )
  })

  return (
    <div>
      {mappedProjects}
    </div>
  )
}

export default ProjectIndexContainer