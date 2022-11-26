class FetchPostAssignment {

  static async addAssignment(formPayload) {
    try {
      const response = await fetch("api/v1/assignments", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
        })
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const responseBody = await response.json()
      return responseBody
    } catch(error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }
}

export default FetchPostAssignment