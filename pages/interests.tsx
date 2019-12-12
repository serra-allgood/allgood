import Head from 'next/head'

import { BannerLanding, Layout } from '../components'
import { Interests as Summary } from '../components/tiles'
import { INTERESTS } from '../components/Constants'

const Interests = () => (
  <Layout>
    <Head>
      <title>{INTERESTS}</title>
      <meta name='description' content={`${INTERESTS} of Serra C Allgood`} />
    </Head>

    <BannerLanding header={INTERESTS} summary={Summary} />

    <div>
      <div id='main'>
        <section id='one' className='spotlights'>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h2>Aspiring Polyglot</h2>
                </header>
                <p>
                  Confident enough to identify as an expert in Ruby on Rails, my free time is spent experimenting and learning idiomatic techniques in Golang, Rust, Elixir, and Elm, with my sights set on PureScript, ClojureScript, and Mercury.
                </p>
                <p>
                  An actual "natural" language I'm interested in, though, is Toki Pona; a conlang consisting of roughly 120 words constructed to reduce communication to the absolute minimum semantics necessary to convey concepts.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h2>Federated &amp; Decentralized Technology</h2>
                </header>
                <p>
                  Open source software for decentralized technologies such as <a href='https://joinmastodon.org'>Mastodon</a>, the <a href='https://matrix.org'>Matrix Protocol</a>, the <a href='https://activitypub.rocks'>ActivityPub Protocol</a>, and <a href='https://writefreely.org'>Write Freely</a>.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className='content'>
              <div className='inner'>
                <header className='major'>
                  <h2>Following Scientific Research</h2>
                </header>
                <p>
                  Trained in how to engage with scientific research per earning a BS in Psychology, I am currently very interested in research in the field of software testing after stumbling upon a testing technique called <em>metamorphic testing</em>. It's my understanding that the <strong><em>unit test suites</em></strong> derived from TDD are best understood to be, as the initialism suggests, <strong>development tools</strong> rather than properly designed test suites, and I'm quite fascinated by how truly robust test design works.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
)

export default Interests
