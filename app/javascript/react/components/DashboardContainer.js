import React, {useState, useEffect} from "react"
import DashboardProjectTile from "./DashboardProjectTile"
// import DashboardArtTile from "./DashboardArtTile"
// import DashboardArtContainer from "./DashboardArtContainer"

const DashboardContainer = (props) => {
  const [project, setProject] = useState({})
  // const [art, setArt] = useState([])

  const fetchDashboard = async () => {
    try {
      const response = await fetch("api/v1/users", {
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

  // const fetchArt = async () => {
  //   try {
  //     const response = await fetch("api/v1/art")
  //     if(!response.ok) {
  //       const errorMessage = `${response.status} (${response.statusText})`
  //       const error = new Error(errorMessage)
  //       throw(error)
  //     } else {
  //       const parsedArt = await response.json()
  //       setArt(parsedArt)
  //     }
  //   } catch(error) {
  //     console.log(`Error with Fetch: ${error.message}`)
  //   }
  // }

  useEffect(() => {
    fetchDashboard()
  }, [])

  // useEffect(() => {
  //   fetchArt()
  // }, [])

  let mappedProjects
  if(project.projects){
    mappedProjects = project.projects.map((project) => {
      return(
        <DashboardProjectTile
        key={project[0].id}
        project={project[0]}
        assignments={project[1]}
        />
      )
    }) 
  }

  let user
  if(project.user){
    user = <p>Hi {project.user.first_name}!</p>
  }


  return (
    <div className="typewriter">
      <div className="beige">
        {user}
      </div>
      {mappedProjects}
    </div>
  )
}

export default DashboardContainer
