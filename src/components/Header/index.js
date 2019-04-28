import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HOMEPAGE_ROUTE } from '../../router/constants';
import browserHistory from '../../router/history';
import Container from '../Container';
import Button from '../Button';

const Wrapper = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 1000;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
`;

const ButtonLink = styled(Button)`
  margin-right: 16px;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  padding: 10px 20px;
  object-fit: cover;
`;

const Header = ({ links, homeLogoSrc }) => (
  <Container>
    <Wrapper>
      <Logo src={homeLogoSrc} onClick={() => browserHistory.push(HOMEPAGE_ROUTE)} />
      {links.map(({ href, name, logo }) => (
        <ButtonLink onClick={() => browserHistory.push(href)} key={name}>
          {logo}
          {name}
        </ButtonLink>
      ))}
    </Wrapper>
  </Container>
);

Header.propTypes = {
  links: PropTypes.array,
  homeLogoSrc: PropTypes.string,
};

export default Header;
