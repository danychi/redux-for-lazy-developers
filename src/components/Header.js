import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HOMEPAGE_ROUTE } from '../router/constants';
import browserHistory from '../router/history';
import Container from './Container';
import Button from './Button';

const Header = ({ links, homeLogoSrc }) => (
  <Wrapper>
    <StyledContainer horizontalPadding>
      <Logo src={homeLogoSrc} onClick={() => browserHistory.push(HOMEPAGE_ROUTE)} />
      <Navigation>
        {links.map(({ href, name, src }) => (
          <ButtonLink onClick={() => browserHistory.push(href)} key={name}>
            <img src={src} alt={name} />
          </ButtonLink>
        ))}
      </Navigation>
    </StyledContainer>
  </Wrapper>
);

const Wrapper = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
`;

const StyledContainer = styled(Container)`
  display: flex;
  position: relative;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav``;

const ButtonLink = styled(Button)`
  margin-left: 16px;

  img {
    width: 35px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 40px;
  padding: 10px 20px 10px 0;
  object-fit: cover;
`;

Header.propTypes = {
  links: PropTypes.array,
  homeLogoSrc: PropTypes.string,
};

export default Header;
