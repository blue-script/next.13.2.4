import axios from 'axios'
import {IProduct} from '@/interfaces/product.interface'

axios.defaults.baseURL = process.env.API_URL

export const ProductService = {
  getAll: async () => {
    const {data} = await axios.get<IProduct[]>('/products')
    return data
  },
  getById: async (id: number) => {
    const {data} = await axios.get<IProduct[]>(`/products`, {params: {id}})
    return data[0]
  }
}