import { Product } from '../../models/product.interface'

export const GET_ALL_CART_ITEMS = 'GET_ALL_CART_ITEMS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREASE_QUANTITY = 'INCREASE QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE QUANTITY'
export const EMPTY_CART = 'EMPTY_CART'

export const getAllCartItems = () => ({
  type: GET_ALL_CART_ITEMS,
})

export const addProductToCart = (cartItem: Product) => ({
  type: ADD_TO_CART,
  payload: cartItem,
})

export const removeProductFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
})

export const decreaseQuantity = (id: number) => ({
  type: DECREASE_QUANTITY,
  payload: id,
})

export const increaseQuantity = (id: number) => ({
  type: INCREASE_QUANTITY,
  payload: id,
})

export const emptyCart = () => ({
  type: EMPTY_CART,
})
