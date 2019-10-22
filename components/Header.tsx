import Link from 'next/link'

const Header = () => (
  <header id='header' className='alt'>
    <Link href='/'>
      <a className='logo'>It's <strong>Allgood</strong>, Serra</a>
    </Link>
    {/* <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav> */}
  </header>
)

export default Header
