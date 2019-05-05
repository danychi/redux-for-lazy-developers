import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageCard from '../../components/ImageCard';

const ProfileCard = ({ photoUrl, alt }) => (
  <Wrap>
    <Overlay />
    <ImageCard src={photoUrl} alt={alt} />
  </Wrap>
);

const Wrap = styled.div`
  display: block;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:hover,
  &:focus {
    background: rgba(0, 0, 0, 0.2);
  }
`;

ProfileCard.propTypes = {
  photoUrl: PropTypes.string,
  alt: PropTypes.string,
};

export default ProfileCard;
