import { useState } from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import stylesheet from '../styles/main.scss'

export const Layout = ({ children }) => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <main className={`body ${isMenuVisible ? 'is-menu-visible' : ''}`}>
      <Head>
        <title>It's Allgood, Serra</title>
        <meta name='description' content='Personal professional site for Serra C Allgood' />
        <link href='/static/css/skel.css' rel='stylesheet' />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <div id='wrapper'>
        <Header onToggleMenu={handleToggleMenu} />
        {children}
        <Footer />
      </div>

      <Menu onToggleMenu={handleToggleMenu} />
    </main>
  )
}
