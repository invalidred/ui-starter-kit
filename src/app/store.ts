import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import api from '../api'
import rootReducer, { RootState } from './rootReducer'

export const getStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }),
    ],
  })

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}

const store = getStore()
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, typeof api, Action<string>>
