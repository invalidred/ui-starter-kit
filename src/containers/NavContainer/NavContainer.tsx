import React from 'react'
import { Nav } from '../../components'
import { useIntl } from 'react-intl'
import { useTheme } from 'purewealth-ui'

const NavContainer = () => {
  const { formatMessage } = useIntl()
  return (
    <Nav
      theme={useTheme()}
      translations={{
        dashboard: formatMessage({ id: 'nav.dashboard' }),
        logo: formatMessage({ id: 'nav.logo' }),
        notification: formatMessage({ id: 'nav.notification' }),
      }}
    />
  )
}

export default NavContainer
