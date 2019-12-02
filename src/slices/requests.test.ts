import { requestsSlice, initialState, fetchRequests } from './requests'
import * as fixture from '../fixtures/requests'

const { actions, reducer } = requestsSlice

describe('reducer tests', () => {
  it('should default to initialState when getRequest() action is triggered', () => {
    const modifiedState = { ...initialState, isLoading: true }
    const newState = reducer(modifiedState, actions.getRequests())
    expect(newState).toEqual(initialState)
  })

  it('getRequestsSuccess() action should set requests with value from action', () => {
    const newState = reducer(
      initialState,
      actions.getRequestsSuccess(fixture.requests)
    )
    expect(newState.requests).toEqual(fixture.requests)
  })

  it('getRequestsSuccess() action should set isLoading', () => {
    const newState = reducer(
      { ...initialState, isLoading: true },
      actions.getRequestsSuccess(fixture.requests)
    )
    expect(newState.isLoading).toEqual(false)
  })

  it('getRequestsSuccess() action should set error to blank string', () => {
    const newState = reducer(
      { ...initialState, error: 'something went wrong!' },
      actions.getRequestsSuccess(fixture.requests)
    )
    expect(newState.error).toEqual('')
  })

  it('getRequestFailed() action should set isLoading to false', () => {
    const newState = reducer(
      { ...initialState, isLoading: true },
      actions.getRequestFailed('Something went wrong!')
    )
    expect(newState.isLoading).toEqual(false)
  })

  it('getRequestFailed() action should set requests to empty array', () => {
    const newState = reducer(
      { ...initialState, requests: fixture.requests },
      actions.getRequestFailed('Something went wrong!')
    )
    expect(newState.requests).toEqual([])
  })

  it('getRequestFailed() should set error to expected string', () => {
    const newState = reducer(
      initialState,
      actions.getRequestFailed('Something went wrong!')
    )
    expect(newState.error).toEqual('Something went wrong!')
  })
})

describe('action tests', () => {
  it('fetchRequests() should dispatch getRequests() & getRequestsSuccess() actions when api is successful', async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()
    const api = {
      getRequests: () => Promise.resolve(fixture.requests),
    }
    await fetchRequests()(dispatch, getState, api)
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.getRequests())
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      actions.getRequestsSuccess(fixture.requests)
    )
    expect(getState).not.toHaveBeenCalled()
  })

  it('fetchRequests() should dispatch getRequests() & getRequestsFailed() actions when api fails', async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()
    const api = {
      getRequests: () => Promise.reject('something went wrong!'),
    }
    await fetchRequests()(dispatch, getState, api)
    expect(dispatch).toHaveBeenNthCalledWith(1, actions.getRequests())
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      actions.getRequestFailed('something went wrong!')
    )
    expect(getState).not.toHaveBeenCalled()
  })
})
