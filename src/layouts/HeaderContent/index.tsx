import React from 'react'
import { Container } from 'purewealth-ui'

interface IProps {
  header: JSX.Element
  content: JSX.Element
}

export default (props: IProps) => (
  <Container maxWidth="xl">
    {props.header}
    {props.content}
  </Container>
)
