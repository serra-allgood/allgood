import Head from 'next/head'

import { BannerLanding, Layout } from '../components'
import { Challenges as Summary } from '../components/tiles'
import { CHALLENGES } from '../components/Constants'

const Challenges = () => (
  <Layout>
    <Head>
      <title>{CHALLENGES}</title>
      <meta name='description' content={`${CHALLENGES} Experienced by Serra C Allgood`} />
    </Head>

    <BannerLanding header='Significant Mental Health Indications' summary={Summary} />

    <div>
      <div id='main'>
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <h2>Major Depression<br />with Obsessive Compulsive Tendencies</h2>
            </header>
            <p>
              Since childhood, I have experienced major depression and was diagnosed as such after I attempted suicide at the age of 16. At my current age, my depression most commonly manifests as feeling so overwhelmed that I have great difficulty doing anything other than sleep. Very recent life events have significantly curtailed this behavior, however.
            </p>
          </div>
        </section>
        <section id='two'>
          <div className='inner'>
            <header className='major'>
              <h2>Paranoid Delusions of Persecution</h2>
              <h5>
                <em>inconsistently diagnosed as schizoaffective disorder, major depression with undifferentiated psychotic features, and most recently as type I bipolar disorder</em>
              </h5>
            </header>
            <p>
              Much less accepted by mainstream culture, I am #ActuallyPsychotic with paranoid delusions of persecution, having experienced a psychotic break in the Spring of 2014 shortly after accepting and coming out about my gender identity, as well as a major psychotic episode in the Fall of 2019. My absolute requirement from any employer as reasonable accommodation, as well as collaborators, is direct, honest, and actionable feedback and communication. I earnestly believe that I'm suspected by everyone to be lying about any mental anguish I experience; a quick, direct suggestion about how I can improve my work with my teammates is not going to shatter me.
            </p>
            <p>
              The most annoying aspect of being delusional, though, is experiencing <em>ideas of reference</em>. When I overhear a casual conversation, part of my cognition involuntarily pays attention and tries to parse for what it thinks are clues to me being discussed about in deliberately signaled code. Open office layouts play absolute havoc with this aspect of my mental health, and if the physical environment is organized as such, I will inevitably find a quiet space other than my desk to work.
            </p>
            <p>
              I am well aware of what the common perception of psychotics is. That perception is why I disclose my psychosis on this personal site, precisely because I do not want to be in any situation where people feel threatened by my simple existence.
            </p>
          </div>
        </section>
        <section id='three'>
          <div className='inner'>
            <header className='major'>
              <h2>Undifferentiated Sleep Difficulties</h2>
            </header>
            <p>
              I have significant difficulty getting to and staying asleep. To cope with my sleep problems, I consistently gently force myself to wake up around 04:00, regardless of the day of the week. That does mean some days I become more and less useless towards the end of the traditional workday, so I also try to start my workday as soon as possible. A work environment in which keeping these odd hours can be successful for everyone involved is of high importance to me.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Challenges
