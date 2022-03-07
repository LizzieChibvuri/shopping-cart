import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Cart } from '../models/cart.interface'
import {
  addProductToCart,
  decreaseQuantity,
  emptyCart,
  getAllCartItems,
  increaseQuantity,
  removeProductFromCart,
} from '../store/actions'

const mapStateToProps = (state: any) => ({
  cartItems: state.cartState.cartItems as Cart[],
})

const mapDispatchToProps = {
  getCartItems: getAllCartItems,
  removeProduct: removeProductFromCart,
  addProduct: addProductToCart,
  incrementQuantity: increaseQuantity,
  decrementQuantity: decreaseQuantity,
  emptyCart: emptyCart,
}

type CartProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>
const CartComponent = (props: CartProps) => {
  useEffect(() => {
    props.getCartItems()
  }, [])
  return (
    <>
      <div className="cart-container">
        <span>
          {' '}
          <h1>YOUR SHOPPING BASKET </h1>{' '}
          <button
            onClick={() => {
              props.emptyCart()
            }}>
            Empty Cart
          </button>
        </span>
        <table className="shopping-cart">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Line Total</th>
            </tr>
          </thead>

          <tbody>
            {props.cartItems &&
              props.cartItems.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <img src={item.product.image}></img>
                    <p>{item.product.title}</p>
                    <div>
                      {' '}
                      <button
                        onClick={() => {
                          props.removeProduct(item.product.id)
                        }}>
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>{item.product.price}</td>
                  <td className="row">
                    <button
                      onClick={() => {
                        item.quantity > 1 &&
                          props.decrementQuantity(item.product.id)
                      }}>
                      -
                    </button>

                    <div>{item.quantity}</div>

                    <button
                      onClick={() => {
                        props.incrementQuantity(item.product.id)
                      }}>
                      +
                    </button>
                  </td>
                  <td>{item.product.price * item.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)
