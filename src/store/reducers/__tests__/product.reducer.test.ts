import { Product } from '../../../models/product.interface'
import productsListReducer, { ProductListState } from '../product.reducer'

describe('products reducer', () => {
  const initialState = {
    products: [] as Product[],
    productsLoaded: false,
    showModal: false,
    error: '',
    selectedProductToView: {} as Product,
  } as ProductListState

  it('returns initial state if reduce rcalled with undefined', () => {
    expect(productsListReducer(undefined, {})).toEqual(initialState)
  })

  it('initiates fetch products when action dispatched', () => {
    const action = { type: 'GET_ALL_PRODUCTS' }
    const expected = initialState

    expect(productsListReducer(initialState, action)).toEqual(expected)
  })

  it('loads products on successfully fetching products', () => {
    const products = [makeProduct(), makeProduct]
    const action = { type: 'GET_ALL_PRODUCTS_SUCCESS', payload: products }

    const expected = {
      ...initialState,
      products: products,
      productsLoaded: true,
    }

    expect(productsListReducer(initialState, action)).toEqual(expected)
  })

  it('sets error when failure fetching products', () => {
    const error = 'error'
    const action = { type: 'GET_ALL_PRODUCTS_FAILURE', payload: error }
    const expected = {
      ...initialState,
      error: error,
      productsLoaded: false,
    }

    expect(productsListReducer(initialState, action)).toEqual(expected)
  })

  it('closes product information modal', () => {
    const action = {
      type: 'CLOSE_PRODUCT_INFO_MODALL',
    }
    const expected = {
      ...initialState,
      showModal: false,
    }

    expect(productsListReducer(initialState, action)).toEqual(expected)
  })

  it('opens product information modal', () => {
    const selectedProduct = makeProduct()
    const action = { type: 'SHOW_PRODUCT_INFO_MODAL', payload: selectedProduct }
    const expected = {
      ...initialState,
      showModal: true,
      selectedProductToView: selectedProduct,
    }

    expect(productsListReducer(initialState, action)).toEqual(expected)
  })

  function makeProduct(props?: Partial<Product>): Product {
    return {
      id: 1,
      title: 'shoes',
      price: 12.0,
      description: '',
      category: '',
      image: '',
      rating: { rate: 1, count: 4 },
      ...props,
    }
  }
})
