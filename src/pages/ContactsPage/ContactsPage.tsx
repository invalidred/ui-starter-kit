import * as React from 'react'
import { HeaderContentLayout } from '../../layouts'
import { NavContainer, ContactsContainer } from '../../containers'
import { Typography, Box } from 'purewealth-ui'
import { useIntl } from 'react-intl'

const ContactsPage = () => {
  const { formatMessage } = useIntl()
  return (
    <HeaderContentLayout
      header={<NavContainer />}
      content={
        <Box component="main">
          <Typography variant="h1" style={{ marginBottom: '1rem' }}>
            {formatMessage({ id: 'contacts.header' })}
          </Typography>
          <ContactsContainer />
        </Box>
      }
    />
  )
}

export default ContactsPage
