import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import store from './store'

import { Nav } from '../components'
import { Contacts, Dashboard, NotFound } from '../pages'

const Routes = () => (
  <Router>
    <Contacts path="/contacts" />
    <Dashboard path="/dashboard" />
    <NotFound default={true} />
  </Router>
)

const App = () => (
  <div>
    <Nav />
    <Routes />
  </div>
)

export default App
