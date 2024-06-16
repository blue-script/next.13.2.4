import Layout from '@/components/layout/Layout'
import {NextPage} from 'next'
import Image from 'next/image'
import Head from 'next/head'


const NotFound: NextPage = () => {
  return <Layout>
    <Head>
      <title>Not found</title>
    </Head>
    <div style={{textAlign: 'center'}}>
      {/*на деплое нужен полноценный путь к картинке типо http://test.com/404.webp*/}
      <Image src="/404.webp" alt="" width={450} height={450}/>
    </div>
  </Layout>
}

export default NotFound
