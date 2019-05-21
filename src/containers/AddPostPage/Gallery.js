import React from 'react';
import { isEmpty, prop } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const Gallery = ({ images, selectedImage, onClickImage }) => (
  <Grid>
    {images &&
      !isEmpty(images) &&
      images.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          isSelected={prop('id', selectedImage) === image.id}
          onClick={() => onClickImage(image)}
        />
      ))}
  </Grid>
);

Gallery.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  onClickImage: PropTypes.func,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 2px;
`;

export default Gallery;
