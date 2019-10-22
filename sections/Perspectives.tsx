import { Details } from '../components'

export const Perspectives = () => (
  <section id='perspectives'>
    <header>
      <h2>Defining Perspectives</h2>
    </header>

    <Details summary='Go slow, always stay moving'>
      The software industry is obsessed with notions such as <q>fail fast</q> and <q>move fast and break things.</q> When your culture is based on the idea that something has to be broken before it can be fixed, your culture is based not on constructive, iterative improvement but glorified destruction for destruction's sake, to be forced to create solutions that pivot on a dime because others got lucky doing that in the past. Technology does not exist isolated from human concerns. It is made by and for people with emotions and lives; your MVP should absolutely be embarassing in some way, but the way your team reached the MVP should not be embarassing.
    </Details>

    <Details summary='Commit to the fewest decisions possible'>
      Decisions are costly. They require cognitive load to maintain and actual dollars to change in the future. As my personal hero <a target='_blank' rel='noopener noreferrer' href='https://www.sandimetz.com'>Sandi Metz</a> says, <q>Complexity is convenient; simplicity is difficult.</q>
    </Details>

    <Details summary='Clearing a path for the least advantaged creates a path for everyone'>
      The development of the Internet was a promise of a globally connected world, in which every human is able to participate without the constraints of geography or physical ability. As an industry, we have unequivocably failed to deliver this promise. The word "accessibility" is only approached by the likes of <abbr title='Google, Facebook, Apple, Microsoft'>GFAM</abbr>, settings and features that even the abled benefit from hidden deep in buried menus. However, a ramp enables everyone to climb, and so accessible, ethical design in form and function absolutely cannot be regarded as "nice to have."
    </Details>
  </section>
)
