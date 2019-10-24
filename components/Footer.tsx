import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

require('./Icons')
// require('@fortawesome/free-brands-svg-icons')

const Footer = ({ isLoading }) => (
  <footer id='footer'>
    <div className='inner'>
      <ul className={`icons ${isLoading ? 'hidden' : ''}`}>
        <li>
          <a href='https://github.com/serra-allgood' className='icon alt'>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span className='label'>GitHub</span>
          </a>
        </li>
        <li>
          <a href='https://keybase.io/serra_allgood' className='icon alt'>
            <FontAwesomeIcon icon={['fab', 'keybase']} />
            <span className='label'>Keybase</span>
          </a>
        </li>
        <li>
          <a href='https://qoto.org/@jump_spider' className='icon alt'>
            <FontAwesomeIcon icon={['fab', 'mastodon']} />
            <span className='label'>Mastodon</span>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/serra_allgood' className='icon alt'>
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className='label'>Twitter</span>
          </a>
        </li>

        <li><a href='https://www.linkedin.com/in/serra-allgood' className='icon alt fa-linkedin'><span className='label'>LinkedIn</span></a></li>
      </ul>
      <ul className='copyright'>
        <li>&copy;2019 Serra C Allgood</li>
        <li>Based on a Next.js template by <a href='https://html5up.net'>HTML5 UP</a></li>
        <li>Powered with Now by <a href='https://zeit.co'>Zeit.co</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer
