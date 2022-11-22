import React, {useState, useEffect} from "react"
import DashboardProjectTile from "./DashboardProjectTile"
import { Link } from "react-router-dom"


const DashboardContainer = (props) => {
  const [projects, setProjects] = useState([])

  const fetchDashboard = async () => {
    try {
      const response = await fetch("api/v1/projects", {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedProjects = await response.json()
        setProjects(parsedProjects)
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  let mappedProjects

  if(projects.length > 0){
    mappedProjects = projects.map((projectPack) => {
      if(projectPack.project.open == true){
        return(
          <DashboardProjectTile
          key={projectPack.project.id}
          project={projectPack.project}
          assignments={projectPack.assignments}
          />
        )
      }
    }) 
  }


  return (
    <div>
      <h2 className="blur-header">User Dashboard</h2>
      <div className="container-3">
        <h3>Open Projects</h3>
        <Link to="/new">Create a New Project</Link>
        <br></br>
        <br></br>
        {mappedProjects}
      </div>
    </div>
  )
}

export default DashboardContainer
