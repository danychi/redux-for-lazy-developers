import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from '../../router/constants';
import { COLORS } from '../../styles/colors';
import Container from '../../components/Container';

const NotFoundPage = () => (
  <StyledWrap verticalMargin>
    <div>
      <Title>Sorry, this page isn't available.</Title>
      <p>
        The link you followed may be broken, or the page may have been removed.
        <StyledLink to={HOMEPAGE_ROUTE}> Go back home</StyledLink>
      </p>
    </div>
  </StyledWrap>
);

const Title = styled.h2`
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.link};
`;

const StyledWrap = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export default NotFoundPage;
