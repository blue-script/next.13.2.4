import React, {FC} from 'react'
import {IProductDataSingle} from '@/interfaces/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import s from './ProductItem.module.scss'

const ProductItem: FC<IProductDataSingle> = ({product}) => {
  return (
    <div className={s.item}>
      <Image src={product.image} alt={product.title} width={300} height={300}/>
      <h2>{product.title}</h2>
      <small>{product.price}</small>

      <Link href={`/product/${product.id}`}>Read more</Link>
    </div>
  )
}

export default ProductItem