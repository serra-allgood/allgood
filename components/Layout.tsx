import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import stylesheet from 'styles/main.scss'

export const Layout = ({ children }) => {
  return (
    <main className='body'>
      <Head>
        <title>Next.js Starter</title>
        <meta name='description' content='Personal professional site for Serra Corwin Allgood' />
        <link href='/static/css/skel.css' rel='stylesheet' />
      </Head>

      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

      <div id='wrapper'>
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  )
}
