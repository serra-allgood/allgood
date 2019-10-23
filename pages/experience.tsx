import Head from 'next/head'

import { BannerLanding, Experience as Summary, Layout } from '../components'

const Experience = () => (
  <Layout>
    <Head>
      <title>Past Technical Experience</title>
      <meta name='description' content='Past Technical Experience of Serra C Allgood' />
    </Head>

    <BannerLanding header='Past Technical Experience' summary={Summary} />

    <div>
      <div id='main'>
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <h2>Procore Technologies</h2>
            </header>
            <p>
              During my short tenure at Procore Technologies, I had the privilege to attend two Practical Object Oriented Design workshops given by Sandi Metz, the second of which had only ever been previously taught anywhere a handful of times. From these workshops, I've come to advocate for intentional refactoring, common sense testing techniques, and first designing systems without regard for implementation details.
            </p>
            <p>
              Much of what I grew at Procore weren't raw technical skills, though, but the polished technical skills that develop in an environment designed to empower its members with autonomy and mastery. I grew confident in proposing ideas, adapting and demonstrating personal techniques, as well as my emotional limitations in working in what I perceive to be crisis situations.
            </p>
            <p>
              The raw technical skills I demonstrated were TDD, maintaining a clean and digestible git commit history, and eagerness to learn and holistically understand new technologies.
            </p>
          </div>
        </section>
        <section id='two'>
          <div className='inner'>
            <header className='major'>
              <h3>Springbot</h3>
            </header>
            <p>
              My first official position as a developer was characterized by explosive technical growth and achievement. I initially started on Springbot's Vanguard team, taking responsibility for debugging and maintaining existing code, and was quickly moved to greenfield feature teams.
            </p>
            <p>
              My magnum opus was an AngularJS component that allowed non-technical end users to create rich marketing email templates and campaigns through a drag-n-drop interface. This component was identified by the product team as well as a board member as critical for the launch of Springbot's email campaign management feature, however, the engineering team identified it as out of scope for the MVP, due to the technical complexity. After personallyu reviewing the general design of similar engines in other services through Chrome and Firefox DevTool inspection, I conceived, designed, and implemented this component from scratch a full two months before the engineering team planned to even begin review of how to implement it. I emphatically leveraged low level AngularJS and HTML5 APIs, and in fact, the APIs I used in AngularJS simply don't exist in Angular; much of this development was kismet.
            </p>
            <p>
              In recognition of this accomplishment, I was a recipient of Springbot's Spring Into Action award, a recognition which requires nomination from coworkers and decision by upper management, awarded to three to five recipients each quarter, which included a modest one-time financial reward as well.
            </p>
          </div>
        </section>
        <section id='three'>
          <div className='inner'>
            <header className='major'>
              <hgroup>
                <h3>Stone, McElroy &amp; Associates</h3>
                <h3>SMA Media</h3>
              </hgroup>
            </header>
            <p>
              Stone, McElory &amp; Associates is a police and public safety psychology firm in Atlanta, GA; they provide pre-employment evaluation services for public safety agencies to recommend candidates who are psychologically able to meet the stress and exercise proper execution of authority in police, 911 dispatch, or firefighting work. SMA Media is their reality TV candidate psychological evaluation branch, a young industry that exists mostly through word of mouth and recommendations made between media producers.
            </p>
            <p>
              I was hired initially as an office assistant, responsible for proctoring written psychological exams as well as proofreading and distributing reports written by the psychologists. However, it was made clear that my background in computer science was made me stand out as an applicant for the position; SMA is able to perform upwards of a dozen evaluations per day, as well as remote evaluations in other states, because of their custom office management software, and at the time of my hire, an outside consultancy had been attempting a rewrite of that software for several years. I was hired in part to work with the consultant developers and, in a phrase, keep them honest.
            </p>
            <p>
              The faith and trust placed in me by Doctors Stone and McElory cannot be overstated, as they agreed to discontinue work with the consultancy and support my argument to create a web application instead of a desktop application. I made learning Ruby and Ruby on Rails my singular goal in and out of work, and through online education tools such as Michael Hartl's Rails tutorials and Code School, I delivered a functional product named PsiWare, which is still in use at the firm today, though it has of course been picked up and improved by other developers since then. The version of PsiWare I wrote was capable of searching records, allowing public safety agencies to schedule their own candidates, enabling tele-evaluations through WebRTC, document storage using AWS S3, administering custom written psychological evaluations, and very basic accounting exports to QuickBooks.
            </p>
            <p>
              For SMA Media, I also wrote a web application named Dispatcher that tracked SMA Media's national network of psychology providers and their credentials as well as the exceptionally rapid pace required to take on evaluation requests from media agencies.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Experience
