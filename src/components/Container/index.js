import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
  display: block;
  position: relative;
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 16px;
  margin: ${({ verticalMargin }) => (verticalMargin ? '30px 0' : 0)};

  ${media.tabletPortrait`
    padding: 0 24px;
    margin: ${({ verticalMargin }) => (verticalMargin ? '60px 0' : 0)};
  `};
`;
