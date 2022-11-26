import React, {useState} from "react"
import ErrorList from "./ErrorList"

const NewAssignmentFormTile = (props) => {
  const [newAssignment, setNewAssignment] = useState({
    name: "",
    due_date: "",
    note: "",
    page_count_req: "",
    word_count_req: "",
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
    const requiredFields = ["name", "due_date"]
    requiredFields.forEach(field => {
      if (newAssignment[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
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
        <div>

        </div>
        <div className="container">
          <h4 className="cell text-center">{props.savedProject.name}</h4>
          <div className="cell large-5">
            <form className="callout grid-x grid-margin-x" onSubmit={submitHandler}>
              <ErrorList errors={props.errors}/> 
              {backendErrorMessages}
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

              <label className="cell large-6" htmlFor="page_count_req">
                Page Count
                <input id="page_count_req" type="text" name="page_count_req" onChange={handleInputChangeAssignment} value={newAssignment.page_count_req}/>
              </label>

              <label className="cell large-6" htmlFor="word_count_req">
                Word Count
                <input id="word_count_req" type="text" name="word_count_req" onChange={handleInputChangeAssignment} value={newAssignment.word_count_req}/>
              </label>

              {/* <div className="cell large-6">
                <label className="cell" htmlFor="text_reminder">
                Text Reminder
                <input id="text_reminder" type="checkbox" name="text_reminder" onChange={handleInputChangeAssignment} value={newAssignment.text_reminder}/>
                </label>

                <label className="cell" htmlFor="email_reminder">
                Email Reminder
                <input id="email_reminder" type="checkbox" name="email_reminder" onChange={handleInputChangeAssignment} value={newAssignment.email_reminder}/>
                </label>
              </div> */}

              <div>
                <input className="form-button cell large-2" type="submit" value="Set Deadline"/>
              </div>
            </form>
          </div>
        </div>
      </div>

  )
}

export default NewAssignmentFormTile