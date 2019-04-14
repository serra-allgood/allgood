import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';
import AccentCard from '../components/AccentCard';
import ContraCard from '../components/ContraCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Perspectives from '../views/Perspectives';
import Contraindications from '../views/Contraindications';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ContentWrapper = styled.section`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.section`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const TextEmphasis = styled.p`
  ${tw`font-bold text-2xl text-grey-light tracking-wide`};
`;

const Index = () => (
  <React.Fragment>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Serra Allgood, <br />
          self-taught engineer with a focus on ethical software
        </BigTitle>
        <Subtitle>Trans woman, aspiring psychological researcher, spider enthusiast</Subtitle>
      </Hero>
      <Perspectives offset={1}>
        <Title>Perspectives that separate Serra from others</Title>
        <ContentWrapper>
          <AccentCard bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
            <TextEmphasis>
              If you want to be right, you have to be willing to change your mind and do so frequently.
            </TextEmphasis>
            Software development does not exist in a vacuum, and what you might cherish as a thoughtful and well
            designed approach can always be made better by asking others what their opinions are.
          </AccentCard>
          <AccentCard bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
            <TextEmphasis>You're both the imposter and the hero.</TextEmphasis>
            The two most common fallacies that strike software engineers are two sides of the same coin. Instead of
            despairing that you don't deserve to be where you are, hold the acknowledgment that you don't know
            everything, so at every resting point, you can ask yourself honestly, how can I do this better? What
            assumptions am I making? Instead of taking on more than you can handle and refuse to ask for help in an
            attempt to be the hero, be the hero in the sense that you're always willing to take something on that you
            know will challenge you.
          </AccentCard>
          <AccentCard bg="linear-gradient(to right, rgba(9,117,0,1) 0%, rgba(255,194,0,1) 100%)">
            <TextEmphasis>TDD is not as important as test early, test often.</TextEmphasis>
            There's no shame at throwing code at a problem to get an idea of how you want to approach it, then deleting
            it all and restarting with best practices in mind.
          </AccentCard>
          <AccentCard bg="linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)">
            <TextEmphasis>The only people who decide what brings value to software are the users.</TextEmphasis>
            Every part of the process must have them in mind, and asking how the user benefits is always a valid
            question.
          </AccentCard>
        </ContentWrapper>
      </Perspectives>
      <Contraindications offset={2}>
        <Title>Contraindications for adding Serra to your working group</Title>
        <ContentWrapper>
          <ContraCard
            icon="sad"
            fill="#2feef1"
            stroke="#2f4bf1"
            bg="linear-gradient(to right, rgba(25,25,25,1) 0%, rgba(200,200,200,1) 100%)"
          >
            <TextEmphasis>Major Depression Disorder</TextEmphasis>
            Although I keep getting better at minimizing the impact, there are days when I can't do much of anything. I
            can't guarantee 100% reliability because of this.
          </ContraCard>
          <ContraCard
            icon="bug"
            fill="#f71431"
            stroke="#000"
            bg="radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(200,200,200,1) 100%)"
          >
            <TextEmphasis>Paranoid Delusions</TextEmphasis>
            Thankfully very manageable, these tend to only crop up when I feel like I'm doing something I'm not supposed
            to or in new chaotic social situation. When I have moments that I can't control it, I may need to abruptyly
            and without explanation remove myself from the social situation to calm down.
          </ContraCard>
          <ContraCard
            icon="hourGlass"
            fill="#fff"
            stoke="#000"
            bg="linear-gradient(0deg, rgba(25,25,25,1) 0%, rgba(200,200,200,1) 100%)"
          >
            <TextEmphasis>Aspirations Outside of Tech</TextEmphasis>
            My eventual career path is to pursue graduate education and become a researcher, so any current position in
            tech will always have an eventual deadline. As to when that is, it's currently undecided.
          </ContraCard>
          <ContraCard
            icon="home"
            fill="#f7eb14"
            stroke="#000"
            bg="radial-gradient(circle, rgba(200,200,200,1) 0%, rgba(25,25,25,1) 100%)"
          >
            <TextEmphasis>Works Best from Home</TextEmphasis>
            Due to my particular neurodivergence, I absolute need at least some time working remote. I absolutely see
            the value in working in proximity, however, so it does not need to be 100%.
          </ContraCard>
        </ContentWrapper>
      </Contraindications>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Serra Allgood" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </React.Fragment>
);

export default Index;
