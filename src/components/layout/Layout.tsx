import React, {FC, PropsWithChildren} from 'react'
import Header from '@/components/layout/Header/Header'
import Meta from '@/components/seo/Meta'
import {IMeta} from '@/components/seo/meta.interface'
import Footer from '@/components/layout/Footer'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(()=> import('./Footer'), {
  ssr: false
})

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
  return (
    <Meta title={title} description={description}>
      <Header/>
      <main>{children}</main>
      <DynamicFooter/>
    </Meta>
  )
}

export default Layout