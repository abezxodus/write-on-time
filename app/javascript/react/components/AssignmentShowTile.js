import React from "react"
import NaHandling from "./services/NaHandling"
import PastDue from "./services/PastDue"
import OpenStatus from "./services/OpenStatus"
import FormattedDate from "./services/FormattedDate"

const AssignmentShowTile = (props) => {
  let pageCount
  let wordCount
  let pastDue
  let status
  let formattedDueDate

  if(props) {
    pageCount = new NaHandling(props.assignment.page_count_req)
    wordCount = new NaHandling(props.assignment.word_count_req)
    pastDue = new PastDue(props.assignment.past_due, true)
    status = new OpenStatus(props.assignment.open)
    formattedDueDate = new FormattedDate(props.assignment.due_date)
  }

  return(
    <div className="container">
      <h4>Assignment: {props.assignment.name}</h4>
      <div className="callout">
        {pastDue.pastDueMessage()}
        <p>Due Date: {formattedDueDate.dateFormat()}</p>
        {status.open()}
        <p> Notes on Assignment: {props.assignment.note}</p>
        <div className="container-container">
          <h4> Measures For Success</h4>
          <ul className="calendar-ul">
            <li> Page Count: {pageCount.value}</li>
            <li> Word Count: {wordCount.value}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AssignmentShowTile