class FormattedDate {
  constructor(dateInput) {
    this.dateInput = dateInput;
    this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    this.due_date = new Date(dateInput)
  }

  dateFormat() {
    this.due_date.setMinutes(this.due_date.getMinutes() + this.due_date.getTimezoneOffset())
    return this.due_date.toLocaleDateString("en-US", this.options)

  }

}

export default FormattedDate