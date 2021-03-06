import { Product } from '../../models/product.interface'
import * as ProductActions from '../actions'

export interface ProductListState {
  products: Product[]
  productsForSelectedCategory: Product[]
  productsLoaded: boolean
  showModal: boolean
  error: string
  selectedProductToView: Product
}

export const InitialState: ProductListState = {
  products: [],
  productsLoaded: false,
  productsForSelectedCategory: [],
  showModal: false,
  error: '',
  selectedProductToView: {} as Product,
}

export default function productsListReducer(state = InitialState, action: any) {
  switch (action.type) {
    case ProductActions.INITIATE_GET_ALL_PRODUCTS:
      return {
        ...state,
      }

    case ProductActions.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoaded: true,
        products:
          action.payload.category !== undefined
            ? action.payload.data.filter(
                (x: Product) => x.category === action.payload.category,
              )
            : action.payload.data,
      }

    case ProductActions.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        productsLoaded: false,
        error: action.payload,
      }

    case ProductActions.GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        productsForSelectedCategory: state.products.filter(
          (x) => x.category === action.payload,
        ),
      }

    case ProductActions.CLOSE_PRODUCT_INFO_MODAL:
      return {
        ...state,
        showModal: false,
      }

    case ProductActions.SHOW_PRODUCT_INFO_MODAL:
      return {
        ...state,
        showModal: true,
        selectedProductToView: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
}
