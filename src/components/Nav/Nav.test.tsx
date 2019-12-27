import React from 'react'
import { render } from '@testing-library/react'
import Nav from './Nav'
import { defaultTheme } from 'purewealth-ui'

describe('Nav', () => {
  const translations = {
    notification: 'notification',
    dashboard: 'dashboard',
    logo: 'logo',
  }
  it('should render notifications link', async () => {
    const { findByTestId } = render(
      <Nav translations={translations} theme={defaultTheme} />
    )
    const element = await findByTestId('notification')
    expect(element).toBeDefined()
  })

  it('should render dashboard link', async () => {
    const { findByTestId } = render(
      <Nav translations={translations} theme={defaultTheme} />
    )
    const element = await findByTestId('dashboard')
    expect(element).toBeDefined()
  })
})
