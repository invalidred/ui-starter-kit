import * as React from 'react'
import { Link } from '@reach/router'
import {
  Box,
  IconButton,
  NotificationSVG,
  SettingSVG,
  Theme,
} from 'purewealth-ui'
import purefactsLogo from '../../assets/purefacts-logo.jpg'

interface INavProps {
  translations: {
    logo: string
    notification: string
    dashboard: string
  }
  theme: Theme
}

const Nav = ({ translations, theme }: INavProps) => {
  return (
    <Box
      component="nav"
      display="flex"
      alignItems="center"
      height="2rem"
      padding="1rem"
      borderBottom={`2px solid ${theme.palette.grey[300]}`}
    >
      <Box display={{ xs: 'none', sm: 'block' }}>
        <img
          src={purefactsLogo}
          style={{ height: '1.25rem' }}
          alt={translations.logo}
        />
      </Box>
      <Box
        display="flex"
        flexGrow="1"
        justifyContent={{ xs: 'center', sm: 'flex-end' }}
      >
        <IconButton data-testid="notification">
          <Link to="/contacts">
            <NotificationSVG title={translations.notification} size={24} />
          </Link>
        </IconButton>
        <IconButton data-testid="dashboard">
          <Link to="/dashboard">
            <SettingSVG title={translations.dashboard} size={24} />
          </Link>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Nav
