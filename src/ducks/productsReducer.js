import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

let initialState = {
  loading: false,
  products: []
};

export const getProducts = () => {
  let products = axios.get('/api/products').then(res => res.data);
  return {
    type: GET_PRODUCTS,
    payload: products
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS + '_PENDING':
      return { ...state, loading: true };
    case GET_PRODUCTS + '_FULFILLED':
      return { products: payload, loading: false };
    default:
      return state;
  }
}
