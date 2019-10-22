import Head from 'next/head'

import { BannerLanding, Layout, Perspectives as Summary } from '../components'

const Perspectives = () => (
  <Layout>
    <Head>
      <title>Defining Perspectives</title>
      <meta name='description' content='The defining perspectives of Serra C Allgood' />
    </Head>

    <BannerLanding header='Defining Perspectives' summary={Summary} />

    <div>
      <div id='main'>
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <h2>Go slow, always stay moving</h2>
            </header>
            <p>
              The software industry is obsessed with notions such as <q>fail fast</q> and <q>move fast and break things.</q> When your culture is based on the idea that something has to be broken before it can be fixed, your culture is based not on constructive, iterative improvement but glorified destruction for destruction's sake, to be forced to create solutions that pivot on a dime because others got lucky doing that in the past. I believe it is essential to <strong>always stay moving</strong> and to <strong>go slow</strong> enough to course correct without abandoning all progress made so far.
            </p>
          </div>
        </section>
        <section id='two' className='spotlights'>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Commit to the fewest decisions possible</h3>
                </header>
                <p>
                  Decisions are costly. They require cognitive load to maintain and actual dollars to change in the future. As my personal hero <a target='_blank' rel='noopener noreferrer' href='https://www.sandimetz.com'>Sandi Metz</a> says, <q>Complexity is convenient; simplicity is difficult.</q>
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Clearing a path for the least advantaged creates a path for everyone</h3>
                </header>
                <p>
                  The development of the Internet was a promise of a globally connected world, in which every human is able to participate without the constraints of geography or physical ability. As an industry, we have unequivocally failed to deliver this promise. The word "accessibility" is only approached by the likes of <abbr title='Google, Amazon, Facebook, Apple, Microsoft'>GAFAM</abbr>, settings and features that benefit even the abled hidden deep in buried menus. However, as a ramp enables everyone to climb, accessible, ethical design in form and function absolutely cannot be regarded as "nice to have."
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
