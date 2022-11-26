class FetchProjects {

  static async getProjects() {
    try {
      const response = await fetch("api/v1/projects", {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedProjects = await response.json()
        return parsedProjects
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
  }
}

export default FetchProjects