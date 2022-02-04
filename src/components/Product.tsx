import React from 'react'
import { Product } from '../models/product.interface'

interface ProductsProp{
  product:Product
}
const ProductComponent=(props:ProductsProp)=>{
return(
<>
<div className="product-card">
  <img src={props.product.image} alt="not found"></img>
  <h1>{props.product.title}</h1>
  <p className="price">{props.product.price}</p>
  <p>{props.product.description}</p>
  <p><button>Add to Cart</button></p>
</div>
</>)
}

export default ProductComponent