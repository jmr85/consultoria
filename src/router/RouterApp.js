import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PageNotFound from '../components/PageNotFound'
import Home from '../components/Home'
import Form from '../components/Form'
import Proposito from '../components/Proposito'
import Valores from '../components/Valores'

const RouterApp = () => {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Form} />
            <Route exact path="/proposito" component={Proposito} />
            <Route exact path="/valores" component={Valores} />
            <Route path="*" component={PageNotFound} />
          </Switch>
    </Router>
  )
}

export default RouterApp
