import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import axiosApi from '../axiosApi'
import rootReducer from './rootReducer'
import rootSagas from './rootSagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
})

sagaMiddleware.run(rootSagas)

axiosApi.defaults.withCredentials = true

axiosApi.interceptors.response.use(
    res => res,
    e => {
      if (!e.response.data) {
        e.response = { data: { global: 'No internet!' } }
      }

      throw e
    },
)

export default store
