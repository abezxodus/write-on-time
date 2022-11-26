class FetchAssignment {

  static async getAssignment(url) {
    try {
      const response = await fetch(`/api/v1/assignments/${url}`, {
        credentials: "same-origin"
      })
      if(!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } else {
        const parsedAssignment = await response.json()
        return parsedAssignment
      }
    } catch(error) {
      console.log(`Error with Fetch: ${error.message}`)
    }
  }
}

export default FetchAssignment