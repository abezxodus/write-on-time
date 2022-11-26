class FetchEditProject {

  static async getEditProject(url) {
    try {
      const response = await fetch(`/api/v1/projects/${url}/edit`, {
        credentials: "same-origin"
      })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } const parsedProject = await response.json()
      return parsedProject
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }
}

export default FetchEditProject