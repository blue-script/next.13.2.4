import React, {FC} from 'react'
import {IProductData, IProductDataSingle} from '@/interfaces/product.interface'
import Layout from '@/components/layout/Layout'
import ProductItem from '@/components/ui/product/ProductItem'

const ProductDetail: FC<IProductDataSingle>  = ({product}) => {
  return (
    <Layout title={product.title} description={"Good product"}>
      <ProductItem product={product}/>
    </Layout>
  )
}

export default ProductDetail