import React from 'react'
import { useIntl } from 'react-intl'
import { Dashboard } from '../../components'

const DashboardContainer = () => {
  const { formatMessage } = useIntl()
  return (
    <Dashboard
      translations={{
        header: formatMessage({ id: 'dashboard.header' }),
        message: formatMessage({ id: 'dashboard.message' }),
      }}
    />
  )
}

export default DashboardContainer
