import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AccentCard from './AccentCard';
import SVG from './SVG';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 50px 1fr;
  grid-template-areas:
    'icon content'
    'title title';
  align-items: center;
  & > p {
    grid-area: title;
  }
`;

const ContraCard = ({ children, bg, icon, fill, stroke }) => (
  <AccentCard bg={bg}>
    <Wrapper>
      <SVG icon={icon} stroke={stroke} fill={fill} left="50%" top="25%" absolute={false} />
      {children}
    </Wrapper>
  </AccentCard>
);

ContraCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['bug', 'home', 'sad', 'hourGlass']).isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired
};

export default ContraCard;
