import React from 'react'
import { connect } from 'react-redux'


import { Product } from '../models/product.interface'
import { closeProductPageModal, showProductPageModal } from '../store/actions'

interface Props{
  products:Product[]
}

const mapStateToProps=(state:any)=>
  ({
    showModalState:state.productsState.showModal
  })


const mapDispatchToProps={
closeModal:closeProductPageModal,
showModal:showProductPageModal
}

type ProductsProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & Props

const ProductsComponent=(props:ProductsProps)=>{
  return(
    <>
    <h1>PRODUCTS LIST </h1>
      
        <div className="products-container">
        {
            props.products && props.products.map((product)=>(   
        <div className="product-card" key={product.id}>
        <img onClick={()=>props.showModal()} src={product.image}></img>
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <p><button>Add to Cart</button></p>
      </div>
      )) }
      </div>
      
     {props.showModalState && 
     (<h1>I am a fake Modal</h1>)
     }  
    </>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsComponent)