import React, {useState, useEffect} from "react"
import DashboardProjectTile from "./DashboardProjectTile"
import NewAssignmentFormTile from "./NewAssignmentFormTile"
import FetchProjects from "./services/FetchProjects"
import GoogleCalendarSetup from "./GoogleCalendarSetup"
import FetchPostAssignment from "./services/FetchPostAssignment"
import StatsSummaryTile from "./StatsSummaryTile"
import FetchStats from "./services/FetchStats"
import { Link } from "react-router-dom"

const DashboardContainer = (props) => {
  const [projects, setProjects] = useState([])
  const [errors, setErrors] = useState({})
  const [backendErrors, setBackendErrors] = useState({})
  const [savedProject, setSavedProject] = useState({})
  const [savedAssignment, setSavedAssignment] = useState({})
  const [stats, setStats] = useState({})

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

  const fetchUserStats = async () => {
    const url = props.match.params.id
    const parsedStats = await FetchStats.getStats(url)
    setStats(parsedStats[0])
    // debugger
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  useEffect(() => {
    fetchUserStats()
  }, [])

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
      backendErrors={backendErrors}
    />
  } else {
    if(projects.length > 0) {
      dashboardProjects = projects.map((projectPack) => {
        if(projectPack.project.open === true){
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
                              <StatsSummaryTile
                                key={stats["stats"].id}
                                stats={stats["stats"]}
                              />
                            </div>
                            <div className="container">
                              <h3>Open Projects</h3>
                              <div className="line-break">
                                <Link to="/new">Create a New Project</Link>
                              </div>
                              {dashboardProjects}
                            </div>
                        </div>
    }
    dashboardDisplay = <div>
                          <h2 className="blur-header">User Dashboard</h2>
                            <div className="container">
                              <StatsSummaryTile
                                stats={stats["stats"]}
                              />
                            </div>
                            <div className="container">
                              <h3>Open Projects</h3>
                              <div className="line-break">
                                <Link to="/new">Create a New Project</Link>
                              </div>
                              {dashboardProjects}
                            </div>
                        </div>
  }

  return (
    <div>
      {dashboardDisplay}
    </div>
  )
}

export default DashboardContainer