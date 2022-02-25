import { Cart } from '../../models/cart.interface'

export const INITIATE_GET_ALL_CART_ITEMS = 'GET_ALL_CART_ITEMS'
export const GET_ALL_CART_ITEMS_SUCCESS = 'GET_ALL_CART_ITEMS_SUCCESS'
export const GET_ALL_CART_ITEMS_FAILURE = 'GET_ALL_CART_ITEMS_FAILURE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const initiateGetAllCartItems = () => (dispatch: any) => {}
export const getAllCartItemsSucess = (cartItems: Cart[]) => ({
  type: GET_ALL_CART_ITEMS_SUCCESS,
  payload: cartItems,
})

export const getAllCART_ITEMSFailure = (error: string) => ({
  type: GET_ALL_CART_ITEMS_FAILURE,
  payload: error,
})

export const addProductToCart = (cartItem: Cart) => ({
  type: ADD_TO_CART,
  payload: cartItem,
})

export const removeProductToCart = (cartItem: Cart) => ({
  type: ADD_TO_CART,
  payload: cartItem,
})
