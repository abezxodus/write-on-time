import React from "react"

const AssignmentsEditFormStatusTile = (props) => {

  let completed

  debugger

  if(props.assignment.open == true){
    debugger
    completed == "false"
  } else {
    completed == "true"
  }

  return(
    <div>hello from Status!
    <form className="callout grid-x grid-margin-x" onSubmit="{submitHandler}">
    <label className="cell large-8" htmlFor="name">
    Assignment
    <p>{props.assignment.name}</p>
    </label>
  
    <label className="cell large-4" htmlFor="due_date">
    Due Date
    <p>{props.assignment.due_date}</p>
    </label>
  
    <label className="cell" htmlFor="note">
    Notes
    <p>{props.assignment.note}</p>
    </label>
  
    <div className="cell large-6">
      <label className="cell large-4" htmlFor="page_count_req">
      Page Count
      <input id="page_count_req" type="text" name="page_count_req" onChange="{handleInputChangeAssignment}" value={props.assignment.page_count_req}/>
      </label>
  
      <label className="cell large-4" htmlFor="word_count_req">
      Word Count
      <input id="word_count_req" type="text" name="word_count_req" onChange="{handleInputChangeAssignment}" value={props.assignment.word_count_req}/>
      </label>
    </div>
  
    <label className="cell" htmlFor="open">
      Completed
      <input id="open" type="checkbox" name="open" onChange="{handleInputChangeAssignment}" value={completed}/>
      </label>
  
    <div>
      <input className="form-button cell large-2" type="submit" value="Update"/>
    </div>
  </form>
  </div>
  )
}

export default AssignmentsEditFormStatusTile