class SubmissionVerifier {
  constructor (fields, requiredFields) {
    this.fields = fields
  }

  assignmentErrorCheck() {
    let submitErrors = {}
    let requiredFields = ["name", "due_date", "page_count_req", "word_count_req"]
    requiredFields.forEach(field => {
      if (this.fields[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
      if(field === "page_count_req" || field === "word_count_req"){
        if (isNaN(this.fields[field].trim())) {
          submitErrors = {
            ...submitErrors,
            [field]: "is either not a number or contains a comma."
          }
        }
      }
    })
    return submitErrors
  }

  projectErrorCheck() {
    let submitErrors = {}
    let requiredFields = ["name"]
    requiredFields.forEach(field => {
      if (this.fields[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    return submitErrors
  }
}

export default SubmissionVerifier