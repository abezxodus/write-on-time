class FetchStats {

  static async getStats() {
    try {
      const response = await fetch("api/v1/stats", {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedStats = await response.json()
        return parsedStats
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
  }
}

export default FetchStats