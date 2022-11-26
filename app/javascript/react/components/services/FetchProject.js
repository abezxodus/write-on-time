class FetchProject {

  static async getProject(url) {
    try {
      const response = await fetch(`/api/v1/projects/${url}`, {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedProject = await response.json()
        return parsedProject
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
  }
}

export default FetchProject