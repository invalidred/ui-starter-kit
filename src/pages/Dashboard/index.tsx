import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps } from '@reach/router'

import {
  requestsSelector,
  fetchRequests,
  isLoadingSelector,
} from '../../slices/requests'

const Dashboard = (props: RouteComponentProps) => {
  const dispatch = useDispatch()
  const requests = useSelector(requestsSelector)
  const isLoading = useSelector(isLoadingSelector)

  useEffect(() => {
    if (!requests.length) {
      dispatch(fetchRequests())
    }
  })

  if (isLoading) {
    return <div>Is Loading ...</div>
  }

  if (!requests) {
    return null
  }

  return (
    <main>
      {requests.map(request => (
        <div key={request.id}>
          {request.account}
          <br />
          {request.assignee}
          <br />
          {request.description}
        </div>
      ))}
    </main>
  )
}

export default Dashboard
