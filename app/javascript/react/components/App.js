import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AssignmentShowContainer from './AssignmentShowContainer'
import DashboardContainer from './DashboardContainer'
import NewProjectFormContainer from './NewProjectFormContainer'
import ProjectIndexContainer from './ProjectIndexContainer'
import ProjectShowContainer from './ProjectShowContainer'
import AssignmentsEditFormContainer from './AssignmentsEditFormContainer'
import DashboardLandingTile from './DashboardLandingTile'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardLandingTile}/>
        <Route exact path="/userpage" component={DashboardContainer}/>
        <Route exact path="/projects" component={ProjectIndexContainer}/>
        <Route exact path="/new" component={NewProjectFormContainer}/>
        <Route exact path="/projects/:id" component={ProjectShowContainer}/>
        <Route exact path="/assignments/:id/edit" component={AssignmentsEditFormContainer}/>
        <Route exact path="/assignments/:id" component={AssignmentShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
