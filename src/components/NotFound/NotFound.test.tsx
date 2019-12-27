import React from 'react'
import { render } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound', () => {
  const translations = {
    header: 'NotFound Header',
    message: 'NotFound message',
  }

  it('should render NotFound with expected fields', async () => {
    const { findAllByText } = render(<NotFound translations={translations} />)

    const [headerText] = await findAllByText(translations.header)
    const [messageText] = await findAllByText(translations.message)

    expect(headerText.textContent).toEqual(translations.header)
    expect(messageText.textContent).toEqual(translations.message)
  })
})
