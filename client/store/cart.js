import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/**
 * INITIAL STATE
 */
const cart = [];

/**
 * ACTION CREATORS
 */
const getCart = cart => ({ type: GET_CART, cart });
const addToCart = product => ({ type: ADD_TO_CART, product });
const removeFromCart = product => ({ type: REMOVE_FROM_CART, product });

/**
 * THUNK CREATORS
 */

export const addItemToCart = (productId) => dispatch =>
  axios
    .get(`/api/products/${productId}`)
    .then(res => {
      let action = addToCart(res.data);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const removeItemFromCart = (productId) => dispatch =>
  axios
    .get(`/api/products/${productId}`)
    .then(res => {
      let action = removeFromCart(res.data);
      dispatch(action);
    })
    .catch(err => console.log(err));

export const getUserCart = () => dispatch =>
    axios
      .get('/api/cart')
      .then(res => {
        let action = getCart(res.data);
        dispatch(action);
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = cart, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
    console.log(cart)
      return [...state, action.product];
    case REMOVE_FROM_CART:
      return [...state.filter(product => product.id !== action.product.id)];
    default:
      return state;
  }
}