import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'
import {
  requestsSelector,
  fetchRequests,
  isLoadingSelector,
} from '../../slices/requests'
import { ContactCard, ContactCardSkeleton } from '../../components'
import { Typography } from 'purewealth-ui'

const ContactsContainer = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(requestsSelector)
  const isLoading = useSelector(isLoadingSelector)
  const { formatMessage } = useIntl()
  const translations = {
    isLoading: formatMessage({ id: 'common.isLoading' }),
    heading: formatMessage({ id: 'contacts.header' }),
    empty: formatMessage({ id: 'contacts.empty' }),
  }

  useEffect(() => {
    if (!contacts.length) {
      dispatch(fetchRequests())
    }
  })

  if (isLoading) {
    return <ContactCardSkeleton />
  }

  if (!contacts) {
    return <Typography variant="body1">{translations.empty}</Typography>
  }

  return (
    <main>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </main>
  )
}

export default ContactsContainer
