import React from 'react'
import { render } from '@testing-library/react'
import ContactCard from './ContactCard'
import { requests } from '../../fixtures/requests'

describe('ContactCard', () => {
  it('should render contact with expected fields', async () => {
    const [request] = requests
    const { findAllByText } = render(<ContactCard contact={request} />)
    const [accountText] = await findAllByText(request.account)
    const [assigneeText] = await findAllByText(request.assignee)
    expect(accountText.textContent).toEqual(request.account)
    expect(assigneeText.textContent).toEqual(request.assignee)
  })
})
