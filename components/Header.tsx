import Link from 'next/link'

const Header = ({ onToggleMenu }) => (
  <header id='header' className='alt'>
    <Link href='/'>
      <a className='logo'>It's <strong>Allgood</strong>, Serra</a>
    </Link>
    <nav>
      <a className='menu-link' onClick={onToggleMenu} href='javascript:;'>Menu</a>
    </nav>
  </header>
)

export default Header
