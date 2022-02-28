import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import DashBoard from '../DashBoard'
import LogIn from '../../pages/LogIn'
const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/login" component={LogIn} />
    <Route path="/workspace" component={DashBoard} />
  </Switch>
)

export default App
