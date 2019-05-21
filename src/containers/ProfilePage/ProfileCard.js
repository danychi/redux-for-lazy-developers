import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../components/Image';

const ProfileCard = ({ photoUrl, alt, onClick }) => (
  <Wrap onClick={onClick}>
    <Overlay />
    <Image src={photoUrl} alt={alt} />
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
  onClick: PropTypes.func,
};

export default ProfileCard;
