import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import Layout from '../layouts/HeaderContent'

import { Nav } from '../components'

/** Do not alter import declaration.
 * webpackPrefetch/webpackPreload: magic string to help webpack optimization
 * https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
 * webpackChunkName: helps naming code-split chunk
 * Also DO NOT put import() within lazy() as this will break preload/prefetch
 */
const Contacts = import(
  /* webpackPrefetch: true, webpackChunkName: "Contacts" */ '../pages/Contacts'
)
const LazyContacts = lazy(() => Contacts)

const Dashboard = import(
  /* webpackPrefetch: true, webpackChunkName: "Dashboard" */ '../pages/Dashboard'
)
const LazyDashboard = lazy(() => Dashboard)

const NotFound = import(
  /* webpackPrefetch: true, webpackChunkName: "NotFound" */ '../pages/NotFound'
)
const LazyNotFound = lazy(() => NotFound)

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <LazyContacts path="/contacts" />
      <LazyDashboard path="/dashboard" />
      <LazyNotFound default={true} />
    </Router>
  </Suspense>
)

const App = () => (
  <React.Fragment>
    <Layout header={<Nav />} content={<Routes />} />
  </React.Fragment>
)

export default App
