import React, {useState} from "react"

const ProjectsEditFormTile = (props) => {
  const handleInputChangeProject = (event) => {
    if(event.currentTarget.name === "open"){
      let checkbox = !event.currentTarget.checked
      props.setProject({
        ...props.project,
        [event.currentTarget.name]: checkbox
      })
    }else{
      props.setProject({
        ...props.project,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }   
  }

  let status
  if(props.project.open === false){
    status = <p>CLOSED</p>
  } else {
    status = <p>OPEN</p>
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    props.editProject(props.project)
  }

  return(
    <div class="container">
      <form onSubmit={submitHandler}>
        <label className="cell large-6" htmlFor="name">
          Name of Project
          <input id="name" type="text" name="name" onChange={handleInputChangeProject} value={props.project.name}/>
        </label>

        <label className="cell large-6" htmlFor="description">
          Description
          <input id="description" type="text" name="description" onChange={handleInputChangeProject} value={props.project.description}/>
        </label>

  
        <label className="cell">
          {status}
        </label>

        <label className="cell large-4" htmlFor="open">
        Close Project?
        <input id="open" type="radio" name="open" onChange={handleInputChangeProject}/>
        </label>

        <div>
          <input className="form-button cell large-2" type="submit" value="Edit Project"/>
        </div>
      </form>
    </div>
  )
}

export default ProjectsEditFormTile