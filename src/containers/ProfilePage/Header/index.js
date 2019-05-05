import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar';
import ProfileDetails from './ProfileDetails';
import media from '../../../styles/media';

const Header = ({ details }) => (
  <Wrap>
    <AvatarContainer>
      <StyledAvatar src={details.avatarUrl} />
    </AvatarContainer>
    <ProfileDetails details={details} />
  </Wrap>
);

const Wrap = styled.header`
  display: grid;

  ${media.tablet`
    grid-template-columns: 1fr 2fr;
  `};
`;

const AvatarContainer = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: center;
`;

const StyledAvatar = styled(Avatar)`
  width: 166px;
  height: 166px;
`;

Header.propTypes = {
  details: PropTypes.object,
};

export default Header;
