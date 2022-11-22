import React from "react"

const AssignmentsEditFormTile = (props) => {
  const handleInputChangeAssignment = (event) => {
    if(event.currentTarget.name === "open"){
      let checkbox = !event.currentTarget.checked
      props.setAssignment({
        ...props.assignment,
        [event.currentTarget.name]: checkbox
      })
    }else{
      props.setAssignment({
        ...props.assignment,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }
  }


  let formattedDueDate

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(props.assignment.due_date)
  formattedDueDate = due_date.toLocaleDateString("en-US", options)

  let status
  let closeField
  if(props.assignment.open === false){
    status = <p>CLOSED</p>
  } else if(props.assignment.past_due === true) {
    status = <p className="past-due">PAST DUE</p>
    closeField =     <label className="cell large-4" htmlFor="open">
                        Close Project?
                        <input id="open" type="radio" name="open" onChange={handleInputChangeAssignment}/>
                      </label>
  } else {
    status = <p>OPEN</p>    
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    props.editAssignment(props.assignment)
  }

  return(
    <div className="container-2">
    <form className="callout grid-x grid-margin-x" onSubmit={submitHandler}>
    <label className="cell large-8" htmlFor="name">
    *Assignment
    <input id="name" type="text" name="name" onChange={handleInputChangeAssignment} value={props.assignment.name}/>
    </label>
  
    
    <label className="cell large-4" htmlFor="due_date">
    *Due Date :
    <p>{formattedDueDate}</p>
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
  
    <label className="cell">
      {status}
    </label>

    <label className="cell large-4" htmlFor="open">
      Close Project?
      <input id="open" type="checkbox" name="open" onChange={handleInputChangeAssignment}/>
    </label>

    <div>
      <input className="form-button large-2" type="submit" value="Update"/>
    </div>
  </form>
  </div>
  )
}

export default AssignmentsEditFormTile