import React from 'react'
import { Container, Box } from 'purewealth-ui'

interface IHeaderContentLayoutProps {
  header: JSX.Element
  content: JSX.Element
}

const HeaderContentLayout = (props: IHeaderContentLayoutProps) => (
  <Container maxWidth="lg" style={{ padding: 0 }}>
    <Box>{props.header}</Box>
    <Box p="2rem">{props.content}</Box>
  </Container>
)

export default HeaderContentLayout
