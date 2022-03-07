import { combineReducers } from 'redux'
import cartItemsReducer, { CartItemsState } from './cart.reducer'
import productsListReducer, { ProductListState } from './product.reducer'

interface RootState {
  productsState: ProductListState
  cartState: CartItemsState
}

const rootReducer = combineReducers({
  productsState: productsListReducer,
  cartState: cartItemsReducer,
})

export default rootReducer
