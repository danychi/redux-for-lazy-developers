import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageCard = ({ src, alt }) => <Image src={src} alt={alt} />;

const Image = styled.img`
  width: 100%;
`;

ImageCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageCard;
