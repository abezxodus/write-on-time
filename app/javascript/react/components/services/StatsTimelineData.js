class StatsTimelineData {
  constructor(timelines) {
    this.timelines = timelines;
    this.months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"]
  }

  pages() {
    let data = this.timelines.map((timeline) => {
      return [this.months[timeline.month - 1], timeline.pages]
      })
    data.unshift(['Month', 'Pages'])
    return data
  }

  submissions() {
    let data = this.timelines.map((timeline) => {
      return [this.months[timeline.month - 1], timeline.assignments, timeline.streaks]
      })
    data.unshift(['Month', 'Assignments', 'Highest Streak'])
    return data
  }

  words() {
    let data = this.timelines.map((timeline) => {
      return [this.months[timeline.month - 1], timeline.words]
      })
    data.unshift(['Month', 'Pages'])
    return data
  }
}

export default StatsTimelineData