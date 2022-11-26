import React, { useState } from "react"
import ErrorList from "./ErrorList"

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
    setNewProject({
      ...newProject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name"]
    requiredFields.forEach(field => {
      if (newProject[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    props.setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return (
    <div>
      <h2 className="blur-header">Create Project</h2>
      <div className="container">
        <form onSubmit={submitHandler}>
          <ErrorList 
            errors={props.errors}
          />
          <label className="cell large-6" htmlFor="name">
            *Name of Project
            <input id="name" type="text" name="name" onChange={handleInputChangeProject} value={newProject.name}/>
          </label>

          <label className="cell large-6" htmlFor="description">
            Description
            <input id="description" type="text" name="description" onChange={handleInputChangeProject} value={newProject.description}/>
          </label>

          <div>
            <input className="form-button large-2" type="submit" value="Create Project"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewProjectFormTile