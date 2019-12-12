import Head from 'next/head'

import { BannerLanding, Layout } from '../components'
import { Collaboration as Summary } from '../components/tiles'
import { COLLABORATION } from '../components/Constants'

const Collaboration = () => (
  <Layout>
    <Head>
      <title>{COLLABORATION}</title>
      <meta name='description' content='Collaborating with Serra C Allgood' />
    </Head>

    <BannerLanding header={COLLABORATION} summary={Summary} />

    <div>
      <div id='main'>
        <section id='one' className='spotlights'>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h2>Lift each other up</h2>
                </header>
                <p>
                  When giving feedback during code review, I try to check my assumptions by asking questions regarding the intent of the code, whether we can prioritize follow-up work at a later time, and, most of all, the sanity of the test suite. When working with more junior developers, I prefer to ask them questions instead of giving them advice. Being self-taught in Ruby, I truly believe <em>There's More Than One Way of Doing the Same Thing</em>.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>This is not my work space nor is it yours; it is ours</h3>
                </header>
                <p>
                  I adapt to my environment. I bring my sense of humor when submitting PRs, but I hold it back when commenting on someone else's. If I have a concern with how an interaction occurred, I'll follow-up with the people involved directly, and I expect the same in return. We spend the majority of our lives in our workspaces, so we cannot simply check our baggage at the door; if I am frustrated with how someone engages, my first question is how I can alter my expectations of them and not how they can change to accommodate me.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h3>Let the hero die so the leader can live</h3>
                </header>
                <p>
                  I historically have a nasty habit of over committing and taking on every opportunity to help at my own expense; making sure I haven't set more than two Slack channels to always notify is part of my mental health checklist. Instead of trying to prove myself by jumping to help without consideration for my current obligations, I will seek to encourage "volunteer delegation" by prompting any <em>someone</em> to take direct ownership or to take ownership of prioritizing delegation.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
)

export default Collaboration
