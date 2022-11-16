import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'
import ProjectFormContainer from './ProjectFormContainer'
import ProjectIndexContainer from './ProjectIndexContainer'
import ProjectShowContainer from './ProjectShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/userpage" component={DashboardContainer}/>
        <Route exact path="/newproject" component={ProjectFormContainer}/>
        <Route exact path="/projects" component={ProjectIndexContainer}/>
        <Route exact path="/projects/:id" component={ProjectShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
