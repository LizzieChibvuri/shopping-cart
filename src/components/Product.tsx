import React from 'react'
import { Product } from '../models/products.interface'

export interface ProductsProp{
  product:Product
}
const ProductComponent=(props:ProductsProp)=>{
return(
<>
<ul>
  <li>PRODUCT</li>
  <li>{props.product.id}</li>
  <li>{props.product.description}</li>
  <li>{props.product.price}</li>
</ul>
</>)
}

export default ProductComponent