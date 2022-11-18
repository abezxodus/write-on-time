import React, {useState} from "react"

const AssignmentsEditFormTile = (props) => {
  const handleInputChangeAssignment = (event) => {
    props.setAssignment({
      ...props.assignment,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    props.editAssignment(props.assignment)
  }

  return(
    <div>HELLO FROM EDIT FORM
    <form className="callout grid-x grid-margin-x" onSubmit={submitHandler}>
    <label className="cell large-8" htmlFor="name">
    Assignment
    <input id="name" type="text" name="name" onChange={handleInputChangeAssignment} value={props.assignment.name}/>
    </label>
  
    
    <label className="cell large-4" htmlFor="due_date">
    Due Date :
    <p>{props.assignment.due_date}</p>
    </label>
  
    <label className="cell" htmlFor="note">
    Notes
    <input id="note" type="text" name="note" onChange={handleInputChangeAssignment} value={props.assignment.note}/>
    </label>
  
    <div className="cell large-6">
      <label className="cell large-4" htmlFor="page_count_req">
      Page Count
      <input id="page_count_req" type="text" name="page_count_req" onChange={handleInputChangeAssignment} value={props.assignment.page_count_req}/>
      </label>
  
      <label className="cell large-4" htmlFor="word_count_req">
      Word Count
      <input id="word_count_req" type="text" name="word_count_req" onChange={handleInputChangeAssignment} value={props.assignment.word_count_req}/>
      </label>
    </div>
  
    <div className="cell large-6">
      <label className="cell" htmlFor="text_reminder">
      Text Reminder
      <input id="text_reminder" type="checkbox" name="text_reminder" onChange={handleInputChangeAssignment} value={props.assignment.text_reminder}/>
      </label>
  
      <label className="cell" htmlFor="email_reminder">
      Email Reminder
      <input id="email_reminder" type="checkbox" name="email_reminder" onChange={handleInputChangeAssignment} value={props.assignment.email_reminder}/>
      </label>
    </div>
  
    <label className="cell" htmlFor="open">
      Status:
      <p>{props.assignment.open}</p>
      </label>

    <div>
      <input className="form-button cell large-2" type="submit" value="Update"/>
    </div>
  </form>
  </div>
  )
}

export default AssignmentsEditFormTile