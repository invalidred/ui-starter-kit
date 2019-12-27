import React from 'react'
import { Typography } from 'purewealth-ui'

interface INotFoundProps {
  translations: {
    header: string
    message: string
  }
}

const NotFound = ({ translations }: INotFoundProps) => (
  <main>
    <Typography variant="h1" gutterBottom>
      {translations.header}
    </Typography>
    <Typography variant="body1" gutterBottom>
      {translations.message}
    </Typography>
  </main>
)

export default NotFound
