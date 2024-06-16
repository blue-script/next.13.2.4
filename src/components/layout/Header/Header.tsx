import {NextPage} from 'next'
import Link from 'next/link'
import {FC} from 'react'
import s from './Header.module.scss'
import {useRouter} from 'next/router'

const Header: FC = () => {
  const {pathname} = useRouter()

  return <header className={s.header}>
    <Link href={'/'} className={pathname === '/' ? s.active : ''}>Home</Link>
    <Link href={'/about'} className={pathname === '/about' ? s.active : ''}>About Page</Link>
  </header>
}

export default Header

