class HandleInput {
  constructor(event) {
    this.event = event
  }

  formatInput() {
    if(this.event.currentTarget.name === "open"){
      return !this.event.currentTarget.checked
    } else if (this.event.currentTarget.name === "email_reminder" || 
    this.event.currentTarget.name === "text_reminder" || 
    this.event.currentTarget.name === "google_calendar"){
      return this.event.currentTarget.checked
    } else {
      return this.event.currentTarget.value
    }
  }
}

export default HandleInput