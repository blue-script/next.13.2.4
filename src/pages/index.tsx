import {GetStaticProps, NextPage} from 'next'
import {IProductData} from '@/interfaces/product.interface'
import Home from '@/components/screens/home/Home'
import {ProductService} from '@/services/product.service'

const HomePage: NextPage<IProductData> = ({products}) => {
  return <Home products={products}/>
}

export const getStaticProps: GetStaticProps<IProductData> = async () => {
  const products = await ProductService.getAll()

  return {
    props: {products},
    revalidate: 60
  }
}

// export const getServerSideProps: GetServerSideProps<IProductData> = async () => {
//   const products = await ProductService.getAll()
//
//   return {
//     props: {products}
//   }
// }

export default HomePage

