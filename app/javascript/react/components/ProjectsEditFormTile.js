import React from "react"
import ErrorList from "./ErrorList"
import SubmissionVerifier from "./services/SubmissionVerifier"  
import OpenStatus from "./services/OpenStatus"
import HandleInput from "./services/HandleInput"

const ProjectsEditFormTile = (props) => {
  const handleInputChangeProject = (event) => {
    let newInput = new HandleInput(event).formatInput()
    props.setProject({
      ...props.project,
      [event.currentTarget.name]: newInput
    })
  }   

  let checkedStatus
  let status
  let closeOption
  
  if(props){
    status = new OpenStatus(props.project.open)
    checkedStatus = !props.project.open
    closeOption = status.closeableCheckBox(props.project.closeable, handleInputChangeProject, checkedStatus)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    if(validForSubmission()){
      props.editProject(props.project)
    }
  }

  const validForSubmission = () => {
    let submitErrors = new SubmissionVerifier(props.project).projectErrorCheck()
    props.setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  return(
    <div className="container">
      <form onSubmit={submitHandler}>
        <ErrorList 
            errors={props.errors}
        />
        <label className="cell large-6" htmlFor="name">
          *Name of Project
          <input id="name" type="text" name="name" onChange={handleInputChangeProject} value={props.project.name}/>
        </label>

        <label className="cell large-6" htmlFor="description">
          Description
          <input id="description" type="text" name="description" onChange={handleInputChangeProject} value={props.project.description}/>
        </label>
  
        <label className="cell">
          {status.open()}
        </label>

      {closeOption}

        <div className="center-button">
          <div className="vertical-center">
            <input className="form-button large-2" type="submit" value="Edit Project"/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProjectsEditFormTile