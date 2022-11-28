import React from "react"

const DashboardLandingTile = (props) => {

  return(
    <div>
      <video autoPlay muted className="myVideo" poster="https://write-on-time.s3.amazonaws.com/logos/Write+On+Time+Landing+Page+Image.png">
        <source src="https://write-on-time.s3.amazonaws.com/logos/Write+On+Time+Landing+Page.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default DashboardLandingTile


