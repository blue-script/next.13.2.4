import React, {FC} from 'react'
import Layout from '@/components/layout/Layout'
import {IProductData} from '@/interfaces/product.interface'
import ProductItem from '@/components/ui/product/ProductItem'

const Home: FC<IProductData> = ({products}) => {
  return (
    <Layout title="Home" description="Main info for robots">
      <h1>Hello somebody</h1>

      {products.length ? products.map(p => <ProductItem key={p.id} product={p}/>) : <div>Products not found</div>}
    </Layout>
  )
}

export default Home