import React from 'react'
import { Typography } from 'purewealth-ui'

interface IDashboardProps {
  translations: {
    header: string
    message: string
  }
}

const Dashboard = ({ translations }: IDashboardProps) => (
  <main>
    <Typography variant="h1" gutterBottom>
      {translations.header}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {translations.message}
    </Typography>
  </main>
)

export default Dashboard
