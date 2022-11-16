import React, { useState } from "react"

const ProjectFormTile = (props) => {
  const [newProject, setNewProject] = useState({
    name: "",
    description: ""
  })

  const submitHandler = async (event) => {
    event.preventDefault()
    props.addProject(newProject)
  }

  const handleInputChangeProject = (event) => {
    setNewProject({
      ...newProject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (

    <div className="callout grid-x">
      <img className="cell large-5" src="https://write-on-time.s3.amazonaws.com/logos/Schedule+Image.png" alt="calendar image"/>
      <form className="callout grid-x grid-margin-x" onSubmit={submitHandler}>
        <label className="cell" htmlFor="name">
          Name of Project
          <input id="name" type="text" name="name" onChange={handleInputChangeProject} value={newProject.name}/>
        </label>

        <label className="cell" htmlFor="description">
          Description
          <input id="description" type="text" name="description" onChange={handleInputChangeProject} value={newProject.description}/>
        </label>

        <div>
          <input className="form-button cell large-2" type="submit" value="Create Project"/>
        </div>
      </form>
    </div>
  )
}

export default ProjectFormTile