import Link from 'next/link'

const Menu = ({ onToggleMenu }) => (
  <nav id='menu'>
    <div className='inner'>
      <ul className='links'>
        <li><Link href='/'><a><span onClick={onToggleMenu}>Home</span></a></Link></li>
        <li><Link href='/values'><a><span onClick={onToggleMenu}>Personal Values</span></a></Link></li>
        <li><Link href='/perspectives'><a><span onClick={onToggleMenu}>Defining Perspectives</span></a></Link></li>
        <li><Link href='/experience'><a><span onClick={onToggleMenu}>Past Technical Experience</span></a></Link></li>
        <li><Link href='/collaboration'><a><span onClick={onToggleMenu}>As a Collaborator</span></a></Link></li>
        <li><Link href='/challenges'><a><span onClick={onToggleMenu}>Personal Challenges</span></a></Link></li>
        <li><Link href='/interests'><a><span>Current Interests</span></a></Link></li>
      </ul>
    </div>
    <a className='close' onClick={onToggleMenu}>Close</a>
  </nav>
)

export default Menu
