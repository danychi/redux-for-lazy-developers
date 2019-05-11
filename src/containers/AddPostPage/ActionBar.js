import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { COLORS } from '../../styles/colors';

const ActionBar = ({ onClickBack, onClickNext, isNextButtonDisabled }) => (
  <StickyBar horizontalPadding>
    {onClickBack && <StyledButton onClick={onClickBack}>Back</StyledButton>}
    {onClickNext && (
      <StyledButton onClick={onClickNext} disabled={isNextButtonDisabled} isDisabled={isNextButtonDisabled}>
        Next
      </StyledButton>
    )}
  </StickyBar>
);

ActionBar.propTypes = {
  onClickNext: PropTypes.func,
  onClickBack: PropTypes.func,
  isNextButtonDisabled: PropTypes.bool,
};

const StyledButton = styled(Button)`
  padding: 15px;
  font-size: 16px;
  color: ${({ isDisabled }) => (isDisabled ? '' : COLORS.link)};
`;

const StickyBar = styled(Container)`
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: white;
  padding: 0;

  & > *:nth-child(2) {
    margin-left: auto;
  }
`;

export default ActionBar;
