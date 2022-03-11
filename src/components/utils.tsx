import { Cart } from '../models/cart.interface'

export function formatPrice(price: number) {
  return (Math.round(price * 100) / 100).toFixed(2)
}
export function getCartTotal(items: Cart[]) {
  return items.reduce(
    (previous, current) => previous + current.quantity * current.product.price,
    0,
  )
}
