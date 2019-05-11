import React from 'react';
import Spinner from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => (
  <Wrap>
    <Spinner type="TailSpin" color="black" height="100" width="100" />
  </Wrap>
);

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
