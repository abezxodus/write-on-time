import React, { useState } from "react"

const NewProjectFormTile = (props) => {
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

    <div class="container">
      <form onSubmit={submitHandler}>
        <label className="cell large-6" htmlFor="name">
          Name of Project
          <input id="name" type="text" name="name" onChange={handleInputChangeProject} value={newProject.name}/>
        </label>

        <label className="cell large-6" htmlFor="description">
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

export default NewProjectFormTile