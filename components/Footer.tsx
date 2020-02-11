const Footer = ({ isLoading }) => (
  <footer id='footer'>
    <div className='inner'>
      <ul className={`icons ${isLoading ? 'hidden' : ''}`}>
        <li>
          <a href='https://git.allgood.dev/jump_spider' className='icon alt'>
            <i className='fa fa-gitea' />
            <span className='label'>Gitea</span>
          </a>
        </li>
        <li>
          <a href='https://github.com/serra-allgood' className='icon alt'>
            <i className='fa fa-github' />
            <span className='label'>GitHub</span>
          </a>
        </li>
        <li>
          <a href='https://keybase.io/jump_spider' className='icon alt'>
            <i className='fa fa-keybase' />
            <span className='label'>Keybase</span>
          </a>
        </li>
        <li>
          <a href='https://with.spider.ink' className='icon alt'>
            <img src='/static/writefreely.svg' width='20px' />
            <span className='label'>Blog</span>
          </a>
        </li>
        <li>
          <a rel='me' href='https://tech.lgbt/@jump_spider' className='icon alt'>
            <i className='fa fa-mastodon' />
            <span className='label'>Mastodon</span>
          </a>
        </li>
        <li>
          <a href='https://twitter.com/serra_allgood' className='icon alt'>
            <i className='fa fa-twitter' />
            <span className='label'>Twitter</span>
          </a>
        </li>

        <li>
          <a href='https://www.linkedin.com/in/serra-allgood' className='icon alt'>
            <i className='fa fa-linkedin' />
            <span className='label'>LinkedIn</span>
          </a>
        </li>
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
