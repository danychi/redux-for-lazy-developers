import React from 'react';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import PostCard from '../../components/PostCard';

const HomePage = ({ posts }) => (
  <Container verticalMargin>
    <Grid>
      {Array.isArray(posts) &&
        !isEmpty(posts) &&
        posts.map(({ id, caption, photoUrl, user, location }) => (
          <PostCard
            key={id}
            caption={caption}
            photoUrl={photoUrl}
            avatarUrl={user.avatarUrl}
            username={user.username}
            location={location}
          />
        ))}
    </Grid>
  </Container>
);

HomePage.propTypes = {
  posts: PropTypes.array,
};

const Grid = styled.div`
  display: grid;
  grid-gap: 60px 0;
`;

export default HomePage;
