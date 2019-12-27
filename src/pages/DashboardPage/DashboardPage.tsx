import * as React from 'react'
import { HeaderContentLayout } from '../../layouts'
import { NavContainer, DashboardContainer } from '../../containers'

const DashboardPage = () => (
  <HeaderContentLayout
    header={<NavContainer />}
    content={<DashboardContainer />}
  />
)

export default DashboardPage
