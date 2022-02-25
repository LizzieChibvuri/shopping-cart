import { Product } from './product.interface'

export interface Cart {
  id: number
  userId: number
  date: Date
  product: Partial<Product>[]
}
