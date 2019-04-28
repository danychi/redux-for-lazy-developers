import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HOMEPAGE_ROUTE } from '../../router/constants';
import H1 from '../../components/H1';

const NotFoundPage = () => (
  <Wrap>
    <Title>Content not found</Title>
    <StyledLink to={HOMEPAGE_ROUTE}>Go to home screen</StyledLink>
  </Wrap>
);

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Title = styled(H1)`
  font-size: 30px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

export default NotFoundPage;
