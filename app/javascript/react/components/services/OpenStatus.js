import React from "react"
import { Link } from "react-router-dom"

class OpenStatus {
  constructor(status) {
    this.status = status
  }

  open() {
    if(this.status === true){
      return <p>Status: Open</p>;
    } else {
      return <p>Status: Closed</p>;
    }
  }

  openAssignment(assignmentID) {
    if(this.status === true) {
      return <Link to={`/assignments/${assignmentID}/edit`}>Edit or Mark as Completed</Link>
    }
  }

  closeableCheckBox(closeableStatus, handleInputChangeProject, checkedStatus) {
    if(closeableStatus === true){
      let closeOption = <label className="cell large-4" htmlFor="open">
                          Close Project?
                          <input id="open" type="checkbox" name="open" onChange={handleInputChangeProject} checked={checkedStatus}/>
                        </label>
      return closeOption
    }
  }

  closeable(closeableStatus, project) {
    if(this.status === true) {
      if(closeableStatus === true){
        return <Link to={`/projects/${project}/edit`} className="line-break">Edit or Close Project</Link>
      } else {
        return <Link to={`/projects/${project}/edit`} className="line-break">Edit Project</Link>
      }
    } else {
      return <Link to={`/projects/${project}/edit`} className="line-break">Edit or Reopen Project</Link>
    }
  }
}

export default OpenStatus





// if(props.project.closeable === true){
  // closeOption = <label className="cell large-4" htmlFor="open">
  //                 Close Project?
  //                 <input id="open" type="checkbox" name="open" onChange={handleInputChangeProject} checked={checkedStatus}/>
  //               </label>
// }
