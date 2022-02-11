import { combineReducers } from "redux";
import productsListReducer, { ProductListState } from "./product.reducer";

interface RootState{
productsState:ProductListState
}

const rootReducer=combineReducers({
  productsState:productsListReducer,
})

export default rootReducer