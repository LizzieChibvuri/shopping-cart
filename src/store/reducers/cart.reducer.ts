import { Cart } from '../../models/cart.interface'
import * as CartItems from '../actions/cart.actions'

export interface CartItemsState {
  cartItems: Cart[]
}

export const InitialState: CartItemsState = {
  cartItems: [],
}

export default function cartItemsReducer(state = InitialState, action: any) {
  switch (action.type) {
    case CartItems.GET_ALL_CART_ITEMS:
      return {
        ...state,
      }

    case CartItems.ADD_TO_CART:
      return {
        ...state,
        cartItems:
          state.cartItems.filter((x) => x.product.id == action.payload.id)
            .length > 0
            ? [...state.cartItems]
            : [...state.cartItems, { quantity: 1, product: action.payload }],
      }

    case CartItems.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cart) => cart.product.id != action.payload,
        ),
      }

    case CartItems.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cart) =>
          cart.product.id == action.payload
            ? { product: { ...cart.product }, quantity: cart.quantity + 1 }
            : cart,
        ),
      }

    case CartItems.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cart) =>
          cart.product.id === action.payload
            ? { product: { ...cart.product }, quantity: cart.quantity - 1 }
            : cart,
        ),
      }

    case CartItems.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      }

    default:
      return {
        ...state,
      }
  }
}
