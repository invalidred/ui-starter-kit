import React from 'react'
import { render } from '@testing-library/react'
import translations from '../../translations/en.json'
import NotFoundPage from './NotFoundPage'
import { testHarness } from '../../utils'

describe('NotFoundPage', () => {
  it('should render expected fields', async () => {
    const notFoundHeader = translations['notfound.header']
    const notFoundMessage = translations['notfound.message']

    const { findAllByText } = render(testHarness(<NotFoundPage />))
    const [headerText] = await findAllByText(notFoundHeader)
    const [messageText] = await findAllByText(notFoundMessage)

    expect(headerText.textContent).toEqual(notFoundHeader)
    expect(messageText.textContent).toEqual(notFoundMessage)
  })
})
