import React from 'react'
import { IRequest } from 'models'
import { Card, Typography, Box } from 'purewealth-ui'

interface ICardProps {
  contact: IRequest
}

const ContactCard = ({ contact }: ICardProps) => (
  <Card
    key={contact.id}
    style={{
      maxWidth: '21.5625rem',
      marginBottom: '1rem',
    }}
  >
    <Box>
      <Typography variant="caption">{contact.account}</Typography>
    </Box>
    <Box>
      <Typography variant="h4">{contact.assignee}</Typography>
    </Box>
  </Card>
)

export default ContactCard
