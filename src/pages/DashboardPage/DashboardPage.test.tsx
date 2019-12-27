import React from 'react'
import { render } from '@testing-library/react'
import translations from '../../translations/en.json'
import DashboardPage from './DashboardPage'
import { testHarness } from '../../utils'

describe('DashboardPage', () => {
  it('should render expected fields', async () => {
    const dashboardHeader = translations['dashboard.header']
    const dashboardMessage = translations['dashboard.message']

    const { findAllByText } = render(testHarness(<DashboardPage />))
    const [headerText] = await findAllByText(dashboardHeader)
    const [messageText] = await findAllByText(dashboardMessage)

    expect(headerText.textContent).toEqual(dashboardHeader)
    expect(messageText.textContent).toEqual(dashboardMessage)
  })
})
