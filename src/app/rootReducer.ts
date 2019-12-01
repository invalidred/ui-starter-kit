import { combineReducers } from '@reduxjs/toolkit'
import requestsState from '../slices/requests'

const rootReducer = combineReducers({
  requestsState,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
