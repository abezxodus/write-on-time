import React, {useState} from "react"
import ErrorList from "./ErrorList"

const NewAssignmentFormTile = (props) => {
  const [newAssignment, setNewAssignment] = useState({
    name: "",
    due_date: "",
    note: "",
    page_count_req: "0",
    word_count_req: "0",
    email_reminder: false,
    text_reminder: false,
    project_id: props.savedProject.id
  })

  const handleInputChangeAssignment = (event) => {
    if(event.currentTarget.name === "email_reminder" || 
        event.currentTarget.name === "text_reminder" || 
        event.currentTarget.name === "google_calendar"){
      setNewAssignment({
        ...newAssignment,
        [event.currentTarget.name]: event.currentTarget.checked
      })
    } else {
      setNewAssignment({
        ...newAssignment,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "due_date", "page_count_req", "word_count_req"]
    requiredFields.forEach(field => {
      if (newAssignment[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
      if(field == "page_count_req" || field == "word_count_req"){
        if (isNaN(newAssignment[field].trim())) {
          submitErrors = {
            ...submitErrors,
            [field]: "is either not a number or contains a comma."
          }
        }
      }
    })
    props.setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    if(validForSubmission()){
      props.addAssignment(newAssignment)
    }
  }
  
  let backendErrorMessages
  if(props.mappedErrors){
    backendErrorMessages =  <div className="callout alert grid-x cell large-12">
                              <ul className="calendar-ul">{props.mappedErrors}</ul>
                            </div>
  }

  return(
      <div>
        <h2 className="blur-header">Create Assignment</h2>
        <div className="container">
          <h4 className="cell text-center">{props.savedProject.name}</h4>
          <div className="cell large-5">
            <form className="callout" onSubmit={submitHandler}>
              <ErrorList errors={props.errors}/> 
              {backendErrorMessages}
              <div className="grid-x grid-margin-x">
                <label className="cell large-8" htmlFor="name">
                  *First Assignment
                  <input id="name" type="text" name="name" onChange={handleInputChangeAssignment} value={newAssignment.name}/>
                </label>

                <label className="cell large-4" htmlFor="due_date">
                  *Due Date
                  <input id="due_date" type="date" name="due_date" onChange={handleInputChangeAssignment} value={newAssignment.due_date}/>
                </label>

                <label className="cell" htmlFor="note">
                  Notes
                  <input id="note" type="text" name="note" onChange={handleInputChangeAssignment} value={newAssignment.notes}/>
                </label>
              </div>
              <div className="callout small-12">
                <h5>Measures of Success</h5>
                <div className="container-container">
                  <label className="cell large-6" htmlFor="page_count_req">
                    Page Count
                    <input id="page_count_req" type="text" name="page_count_req" onChange={handleInputChangeAssignment} value={newAssignment.page_count_req}/>
                  </label>

                  <label className="cell large-6" htmlFor="word_count_req">
                    Word Count
                    <input id="word_count_req" type="text" name="word_count_req" onChange={handleInputChangeAssignment} value={newAssignment.word_count_req}/>
                  </label>
                </div>
              </div>

              <div className="center-button">
                <div className="vertical-center">
                  <input className="form-button large-2" type="submit" value="Set Deadline"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default NewAssignmentFormTile