import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import products from './product'
import orders from './orders'
import cart from './cart'
import reviews from './reviews'
import checkout from './checkout';

const reducer = combineReducers({user, products, orders, cart, reviews, checkout})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './orders'
export * from './cart'
export * from './reviews'
