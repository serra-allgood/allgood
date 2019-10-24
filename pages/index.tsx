import { Banner, Layout, Tile } from '../components'
import {
  Collaboration,
  Experience,
  Challenges,
  Interests,
  Perspectives,
  Values
} from '../components/tiles'
import * as Constants from '../components/Constants'

const Index = () => (
  <Layout>
    <div>
      <Banner />

      <div id='main'>
        <section id='one' className='tiles'>
          <Tile header={Constants.VALUES} summary={Values} href='/values' />
          <Tile header={Constants.PERSPECTIVES} summary={Perspectives} href='/perspectives' />
          <Tile header={Constants.EXPERIENCE} summary={Experience} href='/experience' />
          <Tile header={Constants.COLLABORATION} href='collaboration' summary={Collaboration} />
          <Tile header={Constants.INTERESTS} href='interests' summary={Interests} />
          <Tile header={Constants.CHALLENGES} href='/challenges' summary={Challenges} />
        </section>
      </div>
    </div>
  </Layout>
)

export default Index
