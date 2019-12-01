import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as api from '../api/requests'
import { AppThunk } from 'app/store'
import { RootState } from 'app/rootReducer'

interface IRequestState {
  isLoading: boolean
  requests: api.IRequest[]
  error: string
}

const initialState: IRequestState = {
  isLoading: false,
  requests: [],
  error: '',
}

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    getRequests(state) {
      state = initialState
    },
    getRequestsSuccess(state, action: PayloadAction<api.IRequest[]>) {
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

export const fetchRequests = (): AppThunk => async dispatch => {
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
