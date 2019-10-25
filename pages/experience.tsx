import Head from 'next/head'

import { BannerLanding, Layout } from '../components'
import { Experience as Summary } from '../components/tiles'
import { EXPERIENCE } from '../components/Constants'

const Experience = () => (
  <Layout>
    <Head>
      <title>{EXPERIENCE}</title>
      <meta name='description' content={`${EXPERIENCE} of Serra C Allgood`} />
    </Head>

    <BannerLanding header={EXPERIENCE} summary={Summary} />

    <div>
      <div id='main'>
        <section id='one'>
          <div className='inner'>
            <header className='major'>
              <h2>Procore Technologies</h2>
            </header>
            <p>
              During my short tenure at Procore Technologies, I had the privilege to attend two Practical Object-Oriented Design workshops given by Sandi Metz, the second of which had only ever been previously taught anywhere a handful of times. From these workshops, I've come to advocate for intentional refactoring, common sense testing techniques, and first designing systems without regard for implementation details.
            </p>
            <p>
              Much of what I grew at Procore wasn't raw technical skills, though, but the polished technical skills that develop in an environment designed to empower its members with autonomy and mastery. I grew confident in proposing ideas, adapting and demonstrating personal techniques, as well as my emotional limitations in working in what I perceive to be crises.
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
              I characterized my first official position as a developer with explosive technical growth and achievement. I initially started on Springbot's Vanguard team, taking responsibility for debugging and maintaining existing code, and was quickly moved to greenfield feature teams.
            </p>
            <p>
              My magnum opus was an AngularJS component that allowed non-technical end-users to create rich marketing email templates and campaigns through a drag-n-drop interface. The product team, as well as a board member, identified this component feature as critical for the launch of Springbot's email campaign management feature; however, the engineering team identified it as out of scope for the MVP due to the technical complexity. After personally reviewing the general design of similar engines in other services through Chrome and Firefox DevTool inspection, I conceived, designed, and implemented this component from scratch a full two months before the engineering team planned even to begin a review of how to implement it. I emphatically leveraged low-level AngularJS and HTML5 APIs, and in fact, the API I used in AngularJS doesn't exist in Angular; much of this development was kismet.
            </p>
            <p>
              In recognition of this accomplishment, I was a recipient of Springbot's Spring Into Action award, a recognition that requires nomination from coworkers and decision by upper management, awarded to three to five recipients each quarter, which included a modest one-time financial reward as well.
            </p>
          </div>
        </section>
        <section id='three'>
          <div className='inner'>
            <header className='major'>
              <hgroup>
                <h3>Stone, McElroy &amp; Associates</h3>
                <h3>SMA Media Consulting</h3>
              </hgroup>
            </header>
            <p>
              Stone, McElroy & Associates is a psychology firm that provides evaluation services for public safety agencies. Agencies who contract them are committed to hiring only candidates who are psychologically able to handle the stress of public safety work as well as the proper execution of authority. SMA Media Consulting is their branch for evaluating reality TV candidates, pioneering a young industry that exists mostly through word of mouth and recommendations made between media producers.
            </p>
            <p>
              I was hired initially as an office assistant, responsible for proctoring written psychological exams as well as proofreading and distributing reports written by the psychologists. Dr. Stone made clear during the interview process that my background in computer science was what made me stand out as an applicant for the position. SMA can perform upwards of three dozen evaluations per day in an industry where 7-10 evaluations per day are typical because of their custom office management software. At the time of my hire, an outside consultancy had been rewriting that software for several years. I was hired in part to work with the consultant developers and, in a phrase, keep them honest.
            </p>
            <p>
              Doctors Stone and McElroy placed in me a high level of trust and faith that cannot, as they agreed to discontinue work with the consultancy and support my argument to create a web application instead of a desktop application. I made learning Ruby and Ruby on Rails my singular goal inside and outside of work. With online education tools such as Michael Hartl's tutorials and Code School, I delivered a functional product named PsiWare, which is still in use at the firm today, though it has, of course, been picked up and improved by other developers since then. The version of PsiWare I wrote could search past medical records, enabled public safety agencies to schedule their candidates, enabled telehealth evaluations through WebRTC, used AWS S3 for document storage, could administer custom written psychological inventories, and could export essential accounting information to QuickBooks.
            </p>
            <p>
              For SMA Media Consulting, I also wrote a web application named Dispatcher that tracked SMA Media's national network of psychology providers and their credentials as well as the exceptionally rapid pace required to take on evaluation requests from media agencies.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Experience
