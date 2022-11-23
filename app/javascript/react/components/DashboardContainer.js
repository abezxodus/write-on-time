import React, {useState, useEffect} from "react"
import DashboardProjectTile from "./DashboardProjectTile"
import NewAssignmentFormTile from "./NewAssignmentFormTile"
import GoogleCalendarSetup from "./GoogleCalendarSetup"
import { Link } from "react-router-dom"

const DashboardContainer = (props) => {
  const [projects, setProjects] = useState([])
  const [savedProject, setSavedProject] = useState({})
  const [savedAssignment, setSavedAssignment] = useState({})

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

  const addAssignment = async (formPayload) => {
    try {
      const response = await fetch("api/v1/assignments", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
        })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setSavedAssignment(responseBody)
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  let dashboardProjects


  if(savedAssignment.id){
    dashboardProjects = <GoogleCalendarSetup
      savedAssignment={savedAssignment}
      savedProject={savedProject}
    />
  } else if (savedProject.id) {
    dashboardProjects = <NewAssignmentFormTile
      addAssignment={addAssignment}
      savedProject={savedProject}
    />
  } else if(projects.length > 0){
    dashboardProjects = projects.map((projectPack) => {
      if(projectPack.project.open == true){
        return(
          <div>
            <h2 className="blur-header">User Dashboard</h2>
            <div className="container">
              <h3>Open Projects</h3>
              <Link to="/new">Create a New Project</Link>
              <br></br>
              <br></br>
              <DashboardProjectTile
                key={projectPack.project.id}
                project={projectPack.project}
                assignments={projectPack.assignments}
                setSavedProject={setSavedProject}
              />
            </div>
          </div>
        )
      }
    }) 
  }

  return (
    <div>
      {dashboardProjects}
    </div>
  )
}

export default DashboardContainer