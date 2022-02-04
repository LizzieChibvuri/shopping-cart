import { combineReducers } from "redux";
import productsListReducer from "./product.reducer";

const rootReducer=combineReducers({
  productsState:productsListReducer,
})

export default rootReducer