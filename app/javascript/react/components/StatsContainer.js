import React, { useState, useEffect } from "react"
import FetchStats from "./services/FetchStats"
import StatsPieChartTile from "./StatsPieChartTile"
import StatsLineGraphTile from "./StatsLineGraphTile"
import StatsPageStepGraphTile from "./StatsPageStepGraphTile"
import StatsWordColumnGraphTile from "./StatsWordColumnGraphTile"
import StatsSummaryTile from "./StatsSummaryTile"

const StatsContainer = props => {
  const [stats, setStats] = useState({})
  const [timelines, setTimelines] = useState([])

  const fetchUserStats = async () => {
    const url = props.match.params.id
    const parsedStats = await FetchStats.getStats(url)
    setStats(parsedStats[0])
    setTimelines(parsedStats[1])
  }

  useEffect(() => {
    fetchUserStats()
  }, [])

  return (
    <div>
      <h2 className="blur-header">Stats</h2>
      <div className="container">
        <StatsSummaryTile
            stats={stats["stats"]}
        />
        <div className="container-container line-break">
          <StatsPieChartTile
            stats={stats["stats"]}
          />
        </div>
        <div className="callout">
          <StatsLineGraphTile
            timelines={timelines}
          />
        </div>
        <div className="container-container line-break">
          <StatsPageStepGraphTile
            timelines={timelines}
          />
        </div>
        <div className="callout">
          <StatsWordColumnGraphTile
            timelines={timelines}
          />
        </div>
      </div>
    </div>
  )
}

export default StatsContainer