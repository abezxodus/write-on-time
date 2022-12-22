import React from "react"
import OpenStatus from "./OpenStatus";

class PastDue {
  constructor(pastDue, openStatus) {
    if(pastDue === true && openStatus === true){
      this.pastDue = true;
    } else {
      this.pastDue = false;
    }
    this.openStatus = openStatus;
  }

  pastDueMessage() {
    if(this.pastDue === true) {
      return <h5 className="past-due">PAST DUE</h5>
    } else {
      return new OpenStatus(this.openStatus).open()
    }
  }
}

export default PastDue