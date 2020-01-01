import React, { Suspense, lazy } from 'react'
import { useIntl } from 'react-intl'
import { Router, RouteComponentProps } from '@reach/router'

export const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

/** Do not alter import declaration.
 * webpackPrefetch/webpackPreload: magic string to help webpack optimization
 * https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
 * webpackChunkName: helps naming code-split chunk
 * Also DO NOT put import() within lazy() as this will break preload/prefetch
 */
const ContactsPage = import(
  /* webpackPrefetch: true, webpackChunkName: "Contacts" */ '../pages/ContactsPage/ContactsPage'
)
const LazyContactsPage = lazy(() => ContactsPage)

const DashboardPage = import(
  /* webpackPrefetch: true, webpackChunkName: "DashboardPage" */ '../pages/DashboardPage/DashboardPage'
)
const LazyDashboardPage = lazy(() => DashboardPage)

const NotFoundPage = import(
  /* webpackPrefetch: true, webpackChunkName: "NotFoundPage" */ '../pages/NotFoundPage/NotFoundPage'
)
const LazyNotFoundPage = lazy(() => NotFoundPage)

const App = () => {
  const { formatMessage } = useIntl()
  const isLoading = formatMessage({ id: 'common.isLoading' })
  return (
    <Suspense fallback={<div>{isLoading}</div>}>
      <Router>
        <RouterPage path="/contacts" pageComponent={<LazyContactsPage />} />
        <RouterPage path="/dashboard" pageComponent={<LazyDashboardPage />} />
        <RouterPage default={true} pageComponent={<LazyNotFoundPage />} />
      </Router>
    </Suspense>
  )
}

export default App
