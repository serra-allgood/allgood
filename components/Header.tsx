import Link from 'next/link'

const Header = ({ onToggleMenu, ratio }) => {
  return (
    <header id='header' className={`alt ${ratio < 1 ? '' : 'at-top'}`}>
      <Link href='/'>
        <a className='logo'>It's <strong>Allgood</strong>, Serra</a>
      </Link>
      <nav>
        <a className='menu-link' onClick={onToggleMenu}>Menu</a>
      </nav>
    </header>
  )
}

export default Header
