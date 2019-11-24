import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { Nav } from './components'
import { Contacts, Dashboard, NotFound } from './pages'

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

ReactDOM.render(<App />, document.getElementById('root'))
