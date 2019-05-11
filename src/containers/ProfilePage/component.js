import React from 'react';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import Header from './Header';
import ProfileCard from './ProfileCard';
import media from '../../styles/media';

const ProfilePage = ({ ownPosts, user }) => (
  <div>
    {/* eslint-disable-next-line */}
    <Container verticalMargin horizontalPadding>
      {user && <Header details={user} />}
    </Container>
    <Grid>
      {Array.isArray(ownPosts) &&
        !isEmpty(ownPosts) &&
        ownPosts.map(({ id, caption, photoUrl }) => <ProfileCard key={id} alt={caption} photoUrl={photoUrl} />)}
    </Grid>
  </div>
);

ProfilePage.propTypes = {
  user: PropTypes.object,
  ownPosts: PropTypes.array,
};

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;

  ${media.tabletPortrait`
    padding: 0 24px;
    grid-gap: 30px;
  `};
`;

export default ProfilePage;
