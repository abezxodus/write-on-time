class FetchEditAssignment {

  static async getEditProject(url) {
    try {
      const response = await fetch(`/api/v1/assignments/${url}/edit`, {
        credentials: "same-origin"
      })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } const parsedAssignment = await response.json()
      return parsedAssignment
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }
}

export default FetchEditAssignment