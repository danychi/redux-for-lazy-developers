import React from 'react';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import Header from './Header';
import ProfileCard from './ProfileCard';
import media from '../../styles/media';

const ProfilePage = ({ ownPosts, user, onClickPost }) => (
  <div>
    {/* eslint-disable-next-line */}
    <Container verticalMargin horizontalPadding>
      {user && <Header details={user} />}
    </Container>
    <Grid>
      {Array.isArray(ownPosts) &&
        !isEmpty(ownPosts) &&
        ownPosts.map((post) => (
          <ProfileCard key={post.id} alt={post.caption} photoUrl={post.photoUrl} onClick={() => onClickPost(post)} />
        ))}
    </Grid>
  </div>
);

ProfilePage.propTypes = {
  user: PropTypes.object,
  ownPosts: PropTypes.array,
  onClickPost: PropTypes.func,
};

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  grid-gap: 0 3px;

  ${media.tabletPortrait`
    padding: 0 24px;
    grid-gap: 30px;
  `};
`;

export default ProfilePage;
