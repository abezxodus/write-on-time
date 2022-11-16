import React from "react"

const AssignmentIndexTile = (props) => {
  let page_count
  if(parseInt(props.assignment.page_count_req) > 0){
    page_count = props.assignment.page_count_req
  } else {
    page_count = "N/A"
  }

  let word_count
  if(parseInt(props.assignment.word_count_req) > 0){
    word_count = props.assignment.word_count_req
  } else {
    word_count = "N/A"
  }

  let status
  if(props.assignment.open == true){
    status = <p>Status: Open</p>
  } else {
    status = <p>Status: Closed</p>
  }

  let pastDue
  if(props.assignment.past_due == true){
    pastDue = <h5>PAST DUE</h5>
  }

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const due_date = new Date(props.assignment.due_date)
  const formattedDueDate = due_date.toLocaleDateString("en-US", options)

  return(
    <div className="callout">
      <h4>Assignment: {props.assignment.name}</h4>
      {pastDue}
      <p>Due Date: {formattedDueDate}</p>
      {status}
      <p> Notes on Assignment: {props.assignment.note}</p>

      <div>
        <h4> Measures For Success</h4>
        <ul>
          <li> Page Count: {page_count}</li>
          <li> Word Count: {word_count}</li>
        </ul>
      </div>
    </div>
  )
}

export default AssignmentIndexTile