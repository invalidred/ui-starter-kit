import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRequest } from '../models'
import { AppThunk } from 'app/store'
import { RootState } from 'app/rootReducer'
import { useSelector } from 'react-redux'

interface IRequestState {
  isLoading: boolean
  requests: IRequest[]
  error: string
}

export const initialState: IRequestState = {
  isLoading: true,
  requests: [],
  error: '',
}

export const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    getRequests() {
      return initialState
    },
    getRequestsSuccess(state, action: PayloadAction<IRequest[]>) {
      state.isLoading = false
      state.requests = action.payload
      state.error = ''
    },
    getRequestFailed(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
      state.requests = []
    },
  },
})

const {
  getRequests,
  getRequestsSuccess,
  getRequestFailed,
} = requestsSlice.actions

export default requestsSlice.reducer

export const fetchRequests = (): AppThunk => async (
  dispatch,
  getState,
  api
) => {
  try {
    dispatch(getRequests())
    const requests = await api.getRequests()
    dispatch(getRequestsSuccess(requests))
  } catch (error) {
    dispatch(getRequestFailed(error.toString()))
  }
}

export const requestsSelector = (state: RootState) =>
  state.requestsState.requests

export const isLoadingSelector = (state: RootState) =>
  state.requestsState.isLoading
