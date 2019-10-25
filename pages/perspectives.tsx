import Head from 'next/head'

import { BannerLanding, Layout } from '../components'
import { Perspectives as Summary } from '../components/tiles'
import { PERSPECTIVES } from '../components/Constants'

const Perspectives = () => (
  <Layout>
    <Head>
      <title>{PERSPECTIVES}</title>
      <meta name='description' content={`The ${PERSPECTIVES} of Serra C Allgood`} />
    </Head>

    <BannerLanding header={PERSPECTIVES} summary={Summary} />

    <div>
      <div id='main'>
        <section id='one' className='spotlights'>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h2>Go slow, always stay moving</h2>
                </header>
                <p>
                  The software industry is obsessed with notions such as <q>fail fast</q> and <q>move fast and break things.</q> When your culture centers the idea that something has to break before it is fixable, your culture is based not on constructive, iterative improvement but glorified destruction for destruction's sake, to be forced to create solutions that pivot on a dime because others got lucky doing that in the past. I believe it is essential to <strong>always stay moving</strong> yet <strong>go slow</strong> enough to course-correct without abandoning all progress made so far.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Commit to the fewest decisions possible</h3>
                </header>
                <p>
                  Decisions are costly. They require a cognitive load to maintain and actual dollars to change in the future. <a target='_blank' rel='noopener noreferrer' href='https://www.sandimetz.com'>Sandi Metz</a>, one of my personal heroes, says it best: "Complexity is convenient; simplicity is difficult."
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Clearing a path for the least advantaged creates a way for everyone</h3>
                </header>
                <p>
                  The development of the Internet was a promise of a globally connected world, in which every human can participate without the constraints of geography or physical ability. As an industry, we have unequivocally failed to deliver this promise. Only the likes of <abbr title='Google, Amazon, Facebook, Apple, Microsoft'>GAFAM</abbr> seriously approach accessibility well, yet even then settings and features that benefit even the abled are hidden deep in buried menus. Accessible and ethical software design in form and function absolutely cannot be regarded as "nice to have," because a ramp enables everyone to climb.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
)

export default Perspectives
