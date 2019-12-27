import * as React from 'react'
import { HeaderContentLayout } from '../../layouts'
import { NavContainer, NotFoundContainer } from '../../containers'

const NotFoundPage = () => (
  <HeaderContentLayout
    header={<NavContainer />}
    content={<NotFoundContainer />}
  />
)

export default NotFoundPage
