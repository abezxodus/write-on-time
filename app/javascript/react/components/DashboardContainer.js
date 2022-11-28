import React, {useState, useEffect} from "react"
import DashboardProjectTile from "./DashboardProjectTile"
import NewAssignmentFormTile from "./NewAssignmentFormTile"
import FetchProjects from "./services/FetchProjects"
import GoogleCalendarSetup from "./GoogleCalendarSetup"
import FetchPostAssignment from "./services/FetchPostAssignment"
import StatsContainer from "./StatsContainer"

import { Link } from "react-router-dom"

const DashboardContainer = (props) => {
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState({})
  const [backendErrors, setBackendErrors] = useState({})
  const [savedProject, setSavedProject] = useState({})
  const [savedAssignment, setSavedAssignment] = useState({})

  const fetchDashboard = async () => {
    const parsedProjects = await FetchProjects.getProjects()
    setProjects(parsedProjects)
  }

  const addAssignment = async (formPayload) => {
    const responseBody = await FetchPostAssignment.addAssignment(formPayload)
    if(responseBody["errors"]){
      setBackendErrors(responseBody)
    } else {
      setSavedAssignment(responseBody)
    } 
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  let mappedErrors

  if(backendErrors["errors"]){
    mappedErrors = backendErrors["errors"].map((error) => {
      if(!error.includes("Created at")){
        return(
          <li>{error}</li>
        )
      }
    })
  }


  let dashboardProjects
  let dashboardDisplay

  if(savedAssignment.id){
    dashboardDisplay = <GoogleCalendarSetup
      key={savedAssignment.id}
      savedAssignment={savedAssignment}
      savedProject={savedProject}
    />
  } else if (savedProject.id) {
    dashboardDisplay = <NewAssignmentFormTile
      key={savedProject.id}
      addAssignment={addAssignment}
      savedProject={savedProject}
      setSavedProject={setSavedProject}
      errors={errors}
      setErrors={setErrors}
      mappedErrors={mappedErrors}
    />
  } else if(projects.length > 0){
    dashboardProjects = projects.map((projectPack) => {
      if(projectPack.project.open == true){
        return(
          <div>
              <DashboardProjectTile
                key={projectPack.project.id}
                project={projectPack.project}
                assignments={projectPack.assignments}
                setSavedProject={setSavedProject}
              />
          </div>
        )
      }
    }) 
    dashboardDisplay = <div>
                          <h2 className="blur-header">User Dashboard</h2>
                          <div className="container">
                            <h3>Open Projects</h3>
                            <Link to="/new">Create a New Project</Link>
                            <br></br>
                            <br></br>
                            {dashboardProjects}
                          </div>
                      </div>
  } else {
    dashboardDisplay = <div>
                          <h2 className="blur-header">User Dashboard</h2>
                          <div className="container">
                            <h3>Open Projects</h3>
                            <Link to="/new">Create a New Project</Link>
                            <br></br>
                            <br></br>
                            {dashboardProjects}
                          </div>
                      </div>
  }

  return (
    <div>
      {dashboardDisplay}
      <StatsContainer
        projectsPack={projects}
      />
    </div>
  )
}

export default DashboardContainer