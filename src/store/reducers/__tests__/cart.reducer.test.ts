import { Cart } from '../../../models/cart.interface'
import { Product } from '../../../models/product.interface'
import cartItemsReducer, { CartItemsState, InitialState } from '../cart.reducer'

describe('products reducer', () => {
  const initialState = {
    cartItems: [] as Cart[],
  } as CartItemsState

  it('returns initial state if reducer called with undefined', () => {
    expect(cartItemsReducer(undefined, {})).toEqual(initialState)
  })

  it('Adds to shopping cart', () => {
    const product1 = makeProduct({ id: 1 })
    const product2 = makeProduct({ id: 2 })
    const action = { type: 'ADD_TO_CART', payload: product1 }
    const action2 = { type: 'ADD_TO_CART', payload: product2 }
    const expected = {
      ...initialState,
      cartItems: [
        ...initialState.cartItems,
        { quantity: 1, product: product1 },
      ],
    }
    const expected2 = {
      ...initialState,
      cartItems: [
        ...initialState.cartItems,
        { quantity: 1, product: product2 },
      ],
    }
    expect(cartItemsReducer(initialState, action)).toEqual(expected)
    expect(cartItemsReducer(initialState, action2)).toEqual(expected2)
  })

  it('decrements product quantity', () => {
    const productId = 1
    const cartItem: Cart = {
      quantity: 1,
      product: makeProduct({ id: productId }),
    }
    const initialCartItemState = {
      ...initialState,
      cartItems: [...initialState.cartItems, { ...cartItem, quantity: 2 }],
    }

    const action = { type: 'DECREASE QUANTITY', payload: productId }
    const expected = {
      ...initialState,
      cartItems: [...initialState.cartItems, { ...cartItem, quantity: 1 }],
    }

    expect(cartItemsReducer(initialCartItemState, action)).toEqual(expected)
  })

  it('increments product quantity', () => {
    const productId = 1
    const cartItem: Cart = {
      quantity: 1,
      product: makeProduct({ id: productId }),
    }
    const initialCartItemState = {
      ...initialState,
      cartItems: [...initialState.cartItems, { ...cartItem, quantity: 2 }],
    }

    const action = { type: 'INCREASE QUANTITY', payload: productId }
    const expected = {
      ...initialState,
      cartItems: [...initialState.cartItems, { ...cartItem, quantity: 3 }],
    }

    expect(cartItemsReducer(initialCartItemState, action)).toEqual(expected)
  })

  function makeProduct(props?: Partial<Product>): Product {
    return {
      id: 1,
      title: 'shoes',
      price: 12.0,
      description: 'test desc',
      category: 'women',
      image: 'test',
      rating: { rate: 1, count: 4 },
      ...props,
    }
  }
})
