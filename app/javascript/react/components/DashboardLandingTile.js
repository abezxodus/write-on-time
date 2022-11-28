import React from "react"
import AboutUsTile from "./AboutUsTile"

const DashboardLandingTile = (props) => {

  return(
    <div>
      <video autoPlay muted className="myVideo" poster="https://write-on-time.s3.amazonaws.com/logos/Write+On+Time+Landing+Page+Image.png">
        <source src="https://write-on-time.s3.amazonaws.com/logos/Write+On+Time+Landing+Page.mp4" type="video/mp4" />
      </video>
      {/* <AboutUsTile/> */}
    </div>
  )
}

export default DashboardLandingTile


