import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Li from './Li';

const Comment = ({ username, comment }) => (
  <Wrap>
    <Username>{username}</Username>
    <Description>{comment}</Description>
  </Wrap>
);

Comment.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
};

const Wrap = styled(Li)`
  display: inline-block;
  flex-shrink: 1;
  min-width: 0;
  padding: 5px 0;
  font-size: 14px;
`;

const Username = styled.a`
  font-weight: bold;
`;

const Description = styled.span`
  margin-left: 4px;
`;

export default Comment;
