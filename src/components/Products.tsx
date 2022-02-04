import React from 'react'

import { Product } from '../models/product.interface'

interface Props{
  products:Product[]
}

// const mapStateToProps=(state:any)=>{
//   return{
//     products:state.productsState
//   }
// }

// const mapDispatchToProps=()=>{
// return{
//   getProducts:initiateGetAllProducts
// }
// }

const ProductsComponent=(props:Props)=>{
  return(
    <>
    <h1>PRODUCTS </h1>
      {
        props.products && props.products.map((product)=>(    <div className="product-card">
        <img src={product.image}></img>
        <h1>{product.title}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <p><button>Add to Cart</button></p>
      </div>
      )
        )
      }
    </>
  )
}

export default ProductsComponent