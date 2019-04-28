import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => (
  <Wrap>
    <Loader type="Bars" color="white" height="100" width="100" />
  </Wrap>
);

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
