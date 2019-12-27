import React from 'react'
import { render } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  const translations = {
    header: 'Dashboard Header',
    message: 'Dashboard message',
  }

  it('should render dashboard with expected fields', async () => {
    const { findAllByText } = render(<Dashboard translations={translations} />)

    const [headerText] = await findAllByText(translations.header)
    const [messageText] = await findAllByText(translations.message)

    expect(headerText.textContent).toEqual(translations.header)
    expect(messageText.textContent).toEqual(translations.message)
  })
})
