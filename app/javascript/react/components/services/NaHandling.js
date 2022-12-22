import React from "react"

class NaHandling {
  constructor(value) {
    if(value === ""){
      this.value = "N/A";
    } else {
      this.value = value;
    }
  }

  descriptionMessage() {
    if(this.value !== "N/A"){
      return <p>"{this.value}"</p>
    }
  }
}

export default NaHandling