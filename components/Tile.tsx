import Link from 'next/link'

export const Tile = ({ header, summary, href }) => (
  <article className='tile'>
    <Link href={href}><a className='link primary' /></Link>
    <header className='major'>
      <h3>{header}</h3>
      {summary()}
      <br />
      <span className='mobile'>Read more...</span>
    </header>
  </article>
)
