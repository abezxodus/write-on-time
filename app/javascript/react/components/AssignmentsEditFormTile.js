import React from "react"
import ErrorList from "./ErrorList"
import FormattedDate from "./services/FormattedDate"
import PastDue from "./services/PastDue"
import SubmissionVerifier from "./services/SubmissionVerifier"
import HandleInput from "./services/HandleInput"

const AssignmentsEditFormTile = (props) => {
  const handleInputChangeAssignment = (event) => {
    let newInput = new HandleInput(event).formatInput()
    props.setAssignment({
      ...props.assignment,
      [event.currentTarget.name]: newInput
    })
  }

  let status
  let formattedDueDate
  
  if(props){
    status = new PastDue(props.assignment.past_due, props.assignment.open).pastDueMessage(props.assignment.open)
    formattedDueDate = new FormattedDate(props.assignment.due_date)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    if(validForSubmission()){
      props.editAssignment(props.assignment)
    }
  }

  const validForSubmission = () => {
    let submitErrors = new SubmissionVerifier(props.assignment).assignmentErrorCheck()
    props.setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return(
    <div className="container">
    <form className="callout grid-x grid-margin-x" onSubmit={submitHandler}>
    <ErrorList 
            errors={props.errors}
          />
    <label className="cell large-8" htmlFor="name">
      *Assignment
      <input id="name" type="text" name="name" onChange={handleInputChangeAssignment} value={props.assignment.name}/>
    </label>
  
    
    <label className="cell large-4" htmlFor="due_date">
      *Due Date :
      <p>{formattedDueDate.dateFormat()}</p>
    </label>
  
    <label className="cell">
      {status}
    </label>
    
    <label className="cell" htmlFor="note">
      Notes
      <input id="note" type="text" name="note" onChange={handleInputChangeAssignment} value={props.assignment.note}/>
    </label>

    <label className="cell large-6" htmlFor="page_count_req">
      Page Count
      <input id="page_count_req" type="text" name="page_count_req" onChange={handleInputChangeAssignment} value={props.assignment.page_count_req}/>
    </label>
  
    <label className="cell large-6" htmlFor="word_count_req">
      Word Count
      <input id="word_count_req" type="text" name="word_count_req" onChange={handleInputChangeAssignment} value={props.assignment.word_count_req}/>
    </label>
  
    <div className="cell center">
      <label className="cell large-4" htmlFor="open">
        Close Assignment?
        <input id="open" type="checkbox" name="open" onChange={handleInputChangeAssignment}/>
      </label>
    </div>

    <div className="cell">
      <input className="form-button large-2" type="submit" value="Update"/>
    </div>
  </form>
  </div>
  )
}

export default AssignmentsEditFormTile