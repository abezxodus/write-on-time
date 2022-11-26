import React, {useEffect, useState} from "react"
import ProjectIndexTile from "./ProjectIndexTile"
import FetchProjects from "./services/FetchProjects"

const ProjectIndexContainer = (props) => {
  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {
    const parsedProjects = await FetchProjects.getProjects()
    setProjects(parsedProjects)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const mappedProjects = projects.map((project) => {
    return (
      <ProjectIndexTile
        key={project.project.id}
        project={project.project}
      />
    )
  })

  return (
    <div>
      <h2  className="blur-header">Project History</h2>
      <div className="container">
        {mappedProjects}
      </div>
    </div>
  )
}

export default ProjectIndexContainer