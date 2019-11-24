import * as React from 'react'
import { Link } from '@reach/router'

const Nav = () => (
  <nav>
    <Link to="contacts">Contacts</Link>
    <Link to="dashboard">Dashboard</Link>
  </nav>
)

export default Nav
