import { Product } from "../../models/product.interface"

export const INITIATE_GET_ALL_PRODUCTS="GET_ALL_PRODUCTS"
export const GET_ALL_PRODUCTS_SUCCESS="GET_ALL_PRODUCTS_SUCCESS"
export const GET_ALL_PRODUCTS_FAILURE="GET_ALL_PRODUCTS_FAILURE"
export const GET_PRODUCTS_BY_CATEGORY="GET_PRODUCTS_BY_CATEGORY"

export const initiateGetAllProducts = () => ({type:INITIATE_GET_ALL_PRODUCTS})
export const  getAllProductsSucess = (products:Product[]) => ({type:GET_ALL_PRODUCTS_SUCCESS,payload:products})
export const  getAllProductsFailure = (error:string) => ({type:GET_ALL_PRODUCTS_FAILURE,payload:error})

export const getProductsByCategory = (categoryId:number) =>({type:"GET_PRODUCTS_BY_CATEGORY",payload:categoryId})