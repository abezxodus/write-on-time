import React from "react"
import NaHandling from "./services/NaHandling"
import PastDue from "./services/PastDue"
import OpenStatus from "./services/OpenStatus"
import FormattedDate from "./services/FormattedDate"

const AssignmentIndexTile = (props) => {
  let pastDue
  let pageCount
  let wordCount
  let note
  let status
  let editButton
  let formattedDueDate

  if(props) {
    pageCount = new NaHandling(props.assignment.page_count_req)
    wordCount = new NaHandling(props.assignment.word_count_req)
    note = new NaHandling(props.assignment.note)
    pastDue = new PastDue(props.assignment.past_due, props.assignment.open)
    status = new OpenStatus(props.assignment.open)
    formattedDueDate = new FormattedDate(props.assignment.due_date)
    editButton = status.openAssignment(props.assignment.id)
  }

  return(
    <div className="callout left">
      <h4 className="center">{props.assignment.name}</h4>
      {pastDue.pastDueMessage()}
      <p>Due {formattedDueDate.dateFormat()}</p>
      {status.open()}
      <p className="no-line-break"> Notes: </p><p>{note.value}</p>
      <div className="callout container-container">
        <h5 className="center line-break"> Measures For Success</h5>
        <ul className="calendar-ul">
          <li className="line-break"> Page Count: {pageCount.value}</li>
          <li> Word Count: {wordCount.value}</li>
        </ul>
      </div>
      <div className="center">
        {editButton}
      </div>
    </div>
  )
}

export default AssignmentIndexTile