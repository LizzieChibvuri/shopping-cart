import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { Product } from '../models/product.interface'
import {
  closeProductPageModal,
  initiateGetAllProducts,
  showProductPageModal,
} from '../store/actions'
import Modal from './shared/Modal'

interface Props {
  category?: string[]
}

const mapStateToProps = (state: any) => ({
  showModalState: state.productsState.showModal,
  selectedProductToView: state.productsState.selectedProductToView as Product,
  productsLoaded: state.productsState.productsLoaded,
  error: state.productsState.error,
  productList: state.productsState.productsLoaded
    ? state.productsState.products
    : ([] as Product[]),
})

const mapDispatchToProps = {
  closeModal: closeProductPageModal,
  showModal: showProductPageModal,
  getProducts: initiateGetAllProducts as () => void,
}

type ProductsProps = typeof mapDispatchToProps &
  ReturnType<typeof mapStateToProps> &
  Props

const ProductsComponent = (props: ProductsProps) => {
  useEffect(() => {
    async function getProductsList() {
      await props.getProducts()
    }

    getProductsList()
  }, [])

  return (
    <>
      <h1>PRODUCTS LIST </h1>
      {props.productsLoaded ? (
        <div className="products-container">
          {props.productList &&
            props.productList.map((product: Product) => (
              <div className="product-card" key={product.id}>
                <img
                  onClick={() => props.showModal(product)}
                  src={product.image}></img>
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p>{product.description}</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            ))}
        </div>
      ) : (
        <p>...Loading Products</p>
      )}

      {props.showModalState && (
        <Modal
          modalTitle={'Product Information'}
          closeModal={props.closeModal}
          product={props.selectedProductToView}></Modal>
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent)
