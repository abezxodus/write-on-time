import React from "react"

const AssignmentShowTile = (props) => {
  let status
  if(props.assignment.open == true){
    status = <p>Status: Open</p>
  } else {
    status = <p>Status: Closed</p>
  }

  let pastDue
  if(props.assignment.past_due == true){
    pastDue = <h5 className="past-due">PAST DUE</h5>
  }

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(`${props.assignment.due_date} EST`)
  due_date.setMinutes(due_date.getMinutes() + due_date.getTimezoneOffset())
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)
  
  let page_count
  if(props.assignment.page_count_req == ""){
    page_count = "N/A"
  } else {
    page_count = props.assignment.page_count_req
  }

  let word_count
  if(props.assignment.word_count_req == ""){
    word_count = "N/A"
  } else {
    word_count = props.assignment.word_count_req
  }

  return(
    <div className="container">
      <h4>Assignment: {props.assignment.name}</h4>
      <div className="callout">
        {pastDue}
        <p>Due Date: {formattedDueDate}</p>
        {status}
        <p> Notes on Assignment: {props.assignment.note}</p>
        <div className="container-container">
          <h4> Measures For Success</h4>
          <ul className="calendar-ul">
            <li> Page Count: {page_count}</li>
            <li> Word Count: {word_count}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AssignmentShowTile