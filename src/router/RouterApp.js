import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PageNotFound from '../components/PageNotFound'
import Home from '../components/Home'
import Form from '../components/Form'

const RouterApp = () => {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Form} />
            <Route path="*" component={PageNotFound} />
          </Switch>
    </Router>
  )
}

export default RouterApp
