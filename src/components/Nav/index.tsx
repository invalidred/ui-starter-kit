import * as React from 'react'
import { Link } from '@reach/router'
import { Box, IconButton, NotificationSVG, SettingSVG } from 'purewealth-ui'
import { useIntl, FormattedMessage, defineMessages } from 'react-intl'
import purefactsLogo from '../../assets/purefacts-logo.jpg'

const Nav = () => {
  const intl = useIntl()
  const { formatMessage: f } = intl
  return (
    <Box
      component="nav"
      display="flex"
      alignItems="space-between"
      height="2rem"
    >
      <Box flexGrow="1">
        <img
          src={purefactsLogo}
          style={{ height: '1.75rem' }}
          alt={f({ id: 'nav.logo' })}
        />
      </Box>
      <Box>
        <IconButton>
          <Link to="contacts">
            <NotificationSVG title={f({ id: 'nav.notification' })} size={20} />
          </Link>
        </IconButton>
        <IconButton>
          <Link to="dashboard">
            <SettingSVG title={f({ id: 'nav.dashboard' })} size={20} />
          </Link>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Nav
