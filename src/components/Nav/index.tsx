import * as React from 'react'
import { Link } from '@reach/router'
import { Box, IconButton, NotificationSVG, SettingSVG } from 'purewealth-ui'
import purefactsLogo from '../../assets/purefacts-logo.jpg'

const Nav = () => (
  <Box component="nav" display="flex" alignItems="space-between" height="2rem">
    <Box flexGrow="1">
      <img
        src={purefactsLogo}
        style={{ height: '1.75rem' }}
        alt="Purefacts Logo"
      />
    </Box>
    <Box>
      <IconButton>
        <Link to="contacts">
          <NotificationSVG title="Notification" size={20} />
        </Link>
      </IconButton>
      <IconButton>
        <Link to="dashboard">
          <SettingSVG title="Setting" size={20} />
        </Link>
      </IconButton>
    </Box>
  </Box>
)

export default Nav
