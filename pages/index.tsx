import {
  Collaboration,
  ContactInfo,
  Experience,
  Incompatibility,
  Interests,
  Navigation,
  Perspectives,
  Values
} from '../sections'

const Index = () => (
  <>
    <header>
      <hgroup>
        <h1>Serra C Allgood</h1>
        <h2>
          <a target='_blank' rel='noopener noreferrer' href='https://allgood.link/pronoun_preferences'>
            pronouns in order of preference
          </a>
        </h2>
      </hgroup>
      <ContactInfo />
      <Navigation />
    </header>

    <main>
      <Values />
      <Perspectives />
      <Collaboration />
      <Incompatibility />
      <Experience />
      <Interests />
    </main>
  </>
)

export default Index
