import React from 'react'
import { Product } from '../../models/product.interface'

interface ModalProps {
  modalTitle: string
  closeModal: () => void
  product: Product
  children?: string
}

const Modal = (props: ModalProps) => {
  return (
    <div className="modal" onClick={() => props.closeModal()}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.modalTitle}</h4>
        </div>
        <div className="modal-body">
          <div className="product-card">
            <img src={props.product.image} alt="not found"></img>
            <h1>{props.product.title}</h1>
            <p className="price">{props.product.price}</p>
            <p>{props.product.description}</p>
            <p>
              <span>
                <button>-</button>
                <button>0</button>
                <button>+</button>
              </span>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={() => props.closeModal()} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
