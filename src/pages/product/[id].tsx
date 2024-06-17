import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {IProductData, IProductDataSingle} from '@/interfaces/product.interface'
import {ProductService} from '@/services/product.service'
import ProductDetail from '@/components/screens/product-detail/ProductDetail'
import {ParsedUrlQuery} from 'node:querystring'

const ProductDetailPage: NextPage<IProductDataSingle> = ({product}) => {
  return <ProductDetail product={product}/>
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const products = await ProductService.getAll()

  return {
    paths: products.map(p => ({params: {id: p.id.toString()}})),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<IProductDataSingle> = async ({params}) => {
  const product = await ProductService.getById(Number(params?.id))

  return {
    props: {product},
    revalidate: 60
  }
}

export default ProductDetailPage

