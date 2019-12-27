import React from 'react'
import { useIntl } from 'react-intl'
import { NotFound } from '../../components'

const NotFoundContainer = () => {
  const { formatMessage } = useIntl()
  return (
    <NotFound
      translations={{
        header: formatMessage({ id: 'notfound.header' }),
        message: formatMessage({ id: 'notfound.message' }),
      }}
    />
  )
}

export default NotFoundContainer
