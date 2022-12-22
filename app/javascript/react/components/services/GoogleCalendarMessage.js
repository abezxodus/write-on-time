import React from "react"

class GoogleCalendarMessage {
  constructor(calendarStatus) {
    this.calendarStatus = calendarStatus
  }

  displayMessage() {
    let googleMessage
    if(this.calendarStatus === true){
      googleMessage = <div>
                        <p>Would you like to add this assignment to your <a href="/redirect">Google calendar</a> or return to your <a href="/dashboard">dashboard page</a>?</p>
                        <p>(This app is in development so Google will require you to allow Write On Time to access your calendar.)</p>
                      </div>
    } else {
      googleMessage = <div>
                          <a href="/dashboard">Return to Dashboard</a>
                          <p className="justify">(If you would like to add assignments to your Google calendar, email michaeltrainor.mt@gmail.com to request setup.)</p>
                      </div>
    }
    return googleMessage
  } 
}

export default GoogleCalendarMessage