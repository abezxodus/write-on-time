import React from "react"
import DashboardArtTile from "./DashboardArtTile"

const DashboardArtContainer = (props) => {
  const mappedArt = props.art.map((piece) => {
    return(
      <DashboardArtTile
        key={piece.id}
        id={piece.id}
        html={piece.work.primaryImage}
        title={piece.work.title}
      />
    )
  })

  return (
    // {mappedArt}
    <div></div>
    )
  }

export default DashboardArtContainer
  
