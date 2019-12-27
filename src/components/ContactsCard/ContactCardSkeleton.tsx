import React from 'react'
import { Card, Box } from 'purewealth-ui'
import { Skeleton } from '@material-ui/lab'

const ContactCardSkeleton = () => (
  <Box>
    {[1, 2, 3].map(index => (
      <Card
        key={index}
        style={{
          maxWidth: '21.5625rem',
          marginBottom: '1rem',
        }}
      >
        <Skeleton variant="text" />
        <Skeleton variant="rect" height={30} />
      </Card>
    ))}
  </Box>
)

export default ContactCardSkeleton
