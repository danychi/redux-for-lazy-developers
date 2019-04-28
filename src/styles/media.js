import { css } from 'styled-components';

export const SIZES = {
  fourK: 2560,
  fullHD: 1920,
  bigDesktop: 1440,
  desktop: 1200,
  tablet: 1024,
  tabletPortrait: 768,
  phone: 425,
};

export default Object.keys(SIZES).reduce((accumulator, label) => {
  const emSize = SIZES[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
