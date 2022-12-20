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

  let closedAssignments = 0
  if(stats["stats"]){
    closedAssignments = stats.stats.assignments_closed_late + stats.stats.assignments_closed_on_time
  }

  let charts
  if(closedAssignments > 0){
    charts = <div>
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
  }

  return (
    <div>
      <h2 className="blur-header">Stats</h2>
      <div className="container">
        <StatsSummaryTile
            stats={stats["stats"]}
        />
        {charts}
      </div>
    </div>
  )
}

export default StatsContainer