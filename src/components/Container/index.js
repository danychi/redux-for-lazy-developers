import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
  display: block;
  position: relative;
  max-width: 1000px;
  margin: 60px auto;
  padding: ${({ horizontalPadding }) => (horizontalPadding ? ' 0 16px' : 0)};
  margin: ${({ verticalMargin }) => (verticalMargin ? '30px 0' : 0)};

  ${media.tabletPortrait`
    padding: ${({ horizontalPadding }) => (horizontalPadding ? ' 0 24px' : 0)};
    margin: ${({ verticalMargin }) => (verticalMargin ? '60px auto' : '0 auto')};
  `};
`;
