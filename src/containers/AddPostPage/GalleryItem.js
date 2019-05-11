import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../components/Button';

const GalleryItem = ({ image, isSelected, onClick }) => (
  <Button onClick={onClick}>
    <StyledImage src={image.photoUrl} isSelected={isSelected} />
  </Button>
);

GalleryItem.propTypes = {
  image: PropTypes.object,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

const StyledImage = styled.img`
  opacity: ${({ isSelected }) => (isSelected ? '0.4' : '')};
  width: 100%;
`;

export default GalleryItem;
