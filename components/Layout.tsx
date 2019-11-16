import { useEffect, useState } from 'react'
import Head from 'next/head'
import useIntersection from 'react-useintersection'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import stylesheet from '../styles/main.scss'

require('@ungap/global-this')

export const Layout = ({ children }) => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [isLoading, setIsLoading] = useState('is-loading')
  const [timeoutID, setTimeoutID] = useState(null)

  useEffect(() => {
    setTimeoutID(
      setTimeout(() => {
        setIsLoading('')
      }, 100)
    )

    return () => {
      clearTimeout(timeoutID)
    }
  }, [])

  const [ref, entry] = useIntersection()

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <main className={`body ${isLoading} ${isMenuVisible ? 'is-menu-visible' : ''}`}>
      <Head>
        <title>It's Allgood, Serra</title>
        <meta name='description' content='Personal professional site for Serra C Allgood' />
        <link href='/static/css/skel.css' rel='stylesheet' />
        <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
        <link rel='stylesheet' href='/static/fork-awesome/css/fork-awesome.min.css' />
        <link rel='manifest' href='/static/site.webmanifest' />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <div ref={ref} />

      <div id='wrapper'>
        <Header onToggleMenu={handleToggleMenu} ratio={entry.intersectionRatio} />
        {children}
        <Footer isLoading={isLoading} />
      </div>

      <Menu onToggleMenu={handleToggleMenu} />
    </main>
  )
}
