import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Li from './Li';
import Button from './Button';
import { CrossIcon } from './Icons/Cross';

const Comment = ({ username, comment, onClickDelete }) => (
  <Wrap>
    <span>
      <Username>{username}</Username>
      <Description>{comment}</Description>
    </span>
    {onClickDelete && (
      <StyledButton onClick={onClickDelete}>
        <CrossIcon />
      </StyledButton>
    )}
  </Wrap>
);

Comment.propTypes = {
  username: PropTypes.string,
  comment: PropTypes.string,
  onClickDelete: PropTypes.func,
};

const Wrap = styled(Li)`
  display: flex;
  justify-content: space-between;
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

const StyledButton = styled(Button)`
  width: 10px;
  fill: gray;

  &:hover svg {
    fill: black;
    transition: fill 0.1s ease-in;
  }
`;

export default Comment;
