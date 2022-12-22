import React, { useState } from "react"
import ErrorList from "./ErrorList"
import SubmissionVerifier from "./services/SubmissionVerifier"
import HandleInput from "./services/HandleInput"
import BackendMessages from "./services/BackendMessages"

const NewProjectFormTile = (props) => {
  const [newProject, setNewProject] = useState({
    name: "",
    description: ""
  })

  const submitHandler = async (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addProject(newProject)
    }
  }

  const handleInputChangeProject = (event) => {
    let newInput = new HandleInput(event).formatInput()
    setNewProject({
      ...newProject,
      [event.currentTarget.name]: newInput
    })
  }

  const validForSubmission = () => {
    let submitErrors = new SubmissionVerifier(newProject).projectErrorCheck()
    props.setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  let backendErrorMessages
  if(props.backendErrors["errors"]){
    backendErrorMessages = new BackendMessages(props.backendErrors["errors"]).messageDisplay()
  }

  return (
    <div>
      <h2 className="blur-header">Create Project</h2>
      <div className="container">
        <form onSubmit={submitHandler}>
          <ErrorList 
            errors={props.errors}
          />
          {backendErrorMessages}
          <label className="cell large-6" htmlFor="name">
            *Name of Project
            <input id="name" type="text" name="name" onChange={handleInputChangeProject} value={newProject.name}/>
          </label>

          <label className="cell large-6" htmlFor="description">
            Description
            <input id="description" type="text" name="description" onChange={handleInputChangeProject} value={newProject.description}/>
          </label>

          <div className="center-button">
            <div className="vertical-center">
            <input className="form-button large-2" type="submit" value="Create Project"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProjectFormTile