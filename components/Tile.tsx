import Link from 'next/link'

export const Tile = ({ header, summary, href }) => (
  <article>
    <header className='major'>
      <h3>{header}</h3>
      {summary()}
    </header>
    <Link href={href}><a className='link primary'><span className='mobile'>Read more...</span></a></Link>
  </article>
)
