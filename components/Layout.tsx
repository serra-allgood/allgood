import { useLayoutEffect, useState } from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import stylesheet from '../styles/main.scss'

export const Layout = ({ children }) => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [isLoading, setIsLoading] = useState('is-loading')
  const [timeoutID, setTimeoutID] = useState(null)

  useLayoutEffect(() => {
    setTimeoutID(
      setTimeout(() => {
        setIsLoading('')
      }, 100)
    )

    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <main className={`body ${isLoading} ${isMenuVisible ? 'is-menu-visible' : ''}`}>
      <Head>
        <title>It's Allgood, Serra</title>
        <meta name='description' content='Personal professional site for Serra C Allgood' />
        <link href='/static/css/skel.css' rel='stylesheet' />
        <script src='/static/font-awesome/js/all.min.js' defer />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <div id='wrapper'>
        <Header onToggleMenu={handleToggleMenu} />
        {children}
        <Footer isLoading={isLoading} />
      </div>

      <Menu onToggleMenu={handleToggleMenu} />
    </main>
  )
}
