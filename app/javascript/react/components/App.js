import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'
import ProjectFormContainer from './ProjectFormContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/userpage" component={DashboardContainer}/>
        <Route exact path="/newproject" component={ProjectFormContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
