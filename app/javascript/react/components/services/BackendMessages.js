import React from "react"

class BackendMessages {
  constructor(backendErrors) {
    this.backendErrors = backendErrors;
  }

  messageDisplay() {  
    let mappedErrors
    if(this.backendErrors.length > 0) {
      mappedErrors = this.backendErrors.map((error) => {
        if(!error.includes("Created at")){
          return(
            <li key={error}>{error}</li>
          )
        }
      })
    }
    let output = <div className="callout alert grid-x cell large-12">
                <ul className="calendar-ul">{mappedErrors}</ul>
              </div>
    return output
  }
}

export default BackendMessages