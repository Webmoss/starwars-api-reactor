import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../middleware/logger'
import monitorReducerEnhancer from '../enhancers/monitorReducer'
import films from './films/reducer'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const initStore = () => {

  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = compose(...enhancers)
  // WIP - Not sure where the composedEnhancers should go

  return createStore(
    combineReducers({
      films
    }),
    bindMiddleware([thunkMiddleware])
  )
}
