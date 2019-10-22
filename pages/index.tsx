import Link from 'next/link'

import {
  Banner,
  Collaboration,
  // ContactInfo,
  Experience,
  Incompatibility,
  Interests,
  Layout,
  Perspectives,
  Values
} from '../components'

const Index = () => (
  <Layout>
    <div>
      <Banner />

      <div id='main'>
        <section id='one' className='tiles'>
          <article>
            <header className='major'>
              <h3>Personal Values</h3>
              <Values />
            </header>
            <Link href='/values'><a className='link primary' /></Link>
          </article>
          <article style={{ backgroundImage: 'url(\'/static/images/pic02.jpg\')' }}>
            <header className='major'>
              <h3>Defining Perspectives</h3>
              <Perspectives />
            </header>
            <Link href='/perspectives'><a className='link primary' /></Link>
          </article>
          <article style={{ backgroundImage: 'url(\'/static/images/pic03.jpg\')' }}>
            <header className='major'>
              <h3>As a Collaborator</h3>
              <Collaboration />
            </header>
          </article>
          <article style={{ backgroundImage: 'url(\'/static/images/pic04.jpg\')' }}>
            <header className='major'>
              <h3>Personal Challenges</h3>
              <Incompatibility />
            </header>
          </article>
          <article style={{ backgroundImage: 'url(\'/static/images/pic05.jpg\')' }}>
            <header className='major'>
              <h3>Past Technical Experience</h3>
              <Experience />
            </header>
          </article>
          <article style={{ backgroundImage: 'url(\'/static/images/pic06.jpg\')' }}>
            <header className='major'>
              <h3>Current Interests</h3>
              <Interests />
            </header>
          </article>
        </section>
        <section id='two'>
          <div className='inner'>
            <header className='major'>
              <h2>Massa libero</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Index
