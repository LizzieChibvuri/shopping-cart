import { Product } from "../../models/product.interface";
import * as ProductActions from "../actions"

export interface ProductListState{
  products:Product[]
  productsLoading:boolean
  error:string
}

export const InitialState:ProductListState={
  products:[] ,
  productsLoading:false,
  error:''
}

export default function productsListReducer(state = InitialState, action:any) {
  switch (action.type) {
    case ProductActions.INITIATE_GET_ALL_PRODUCTS:
      return {
        ...state,
      };

    case ProductActions.getAllProductsSucess:
      return {
        ...state,
        productsLoading: true,
        products: action.payload
      };

    case ProductActions.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        productsLoading: false,
        error: action.payload
      };
  }
}