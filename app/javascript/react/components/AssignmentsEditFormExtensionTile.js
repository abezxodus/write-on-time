import React from "react"

const AssignmentsEditFormExtensionTile = (props) => {
  return(
    <div>Hello from Extension
    <form className="callout grid-x grid-margin-x" onSubmit="{submitHandler}">
    <label className="cell large-8" htmlFor="name">
    Assignment
    <p>{props.assignment.name}</p>
    </label>
  
    <label className="cell large-4" htmlFor="due_date">
    Due Date
    <input id="due_date" type="date" name="due_date" onChange="{handleInputChangeAssignment}" value={props.assignment.due_date}/>
    </label>
  
    <label className="cell" htmlFor="note">
    Notes
    <p>{props.assignment.note}</p>
    </label>
  
    <div className="cell large-6">
      <label className="cell large-4" htmlFor="page_count_req">
      Page Count
      <p>{props.assignment.page_count_req}</p>
      </label>
  
      <label className="cell large-4" htmlFor="word_count_req">
      Word Count
      <p>{props.assignment.word_count_req}</p>
      </label>
    </div>
  
    <div className="cell large-6">
      <label className="cell" htmlFor="text_reminder">
      Text Reminder
      <input id="text_reminder" type="checkbox" name="text_reminder" onChange="{handleInputChangeAssignment}" value={props.assignment.text_reminder}/>
      </label>
  
      <label className="cell" htmlFor="email_reminder">
      Email Reminder
      <input id="email_reminder" type="checkbox" name="email_reminder" onChange="{handleInputChangeAssignment}" value={props.assignment.email_reminder}/>
      </label>
    </div>
  
    <div>
      <input className="form-button cell large-2" type="submit" value="Update"/>
    </div>
  </form>
  </div>
  )
}

export default AssignmentsEditFormExtensionTile