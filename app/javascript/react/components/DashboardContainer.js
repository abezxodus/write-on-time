import React, {useState, useEffect} from "react"
import DashboardTile from "./DashboardTile"
// import DashboardArtTile from "./DashboardArtTile"
// import DashboardArtContainer from "./DashboardArtContainer"

const DashboardContainer = (props) => {
  const [project, setProject] = useState({})
  // const [art, setArt] = useState([])

  const fetchProject = async () => {
    try {
      const response = await fetch("api/v1/project")
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
    fetchProject()
  }, [])

  // useEffect(() => {
  //   fetchArt()
  // }, [])

  let display
  if(project.project) {
    display =
    <DashboardTile
      key={project.project.id}
      project={project.project}
      assignment={project.assignments}
    />
  }

  return (
    <div className="typewriter">
      <div className="beige">
        testing
      </div>
      {display}
      {/* <DashboardArtContainer
        art={art}
      /> */}
    </div>
  )
}

export default DashboardContainer
