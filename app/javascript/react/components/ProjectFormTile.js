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

    <div>
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
          <input className="custom-button cell" type="submit" value="Create Project"/>
        </div>
      </form>
    </div>
  )
}

export default ProjectFormTile