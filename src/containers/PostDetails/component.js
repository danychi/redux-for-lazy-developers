import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import PostCard from '../../components/PostCard';

const PostDetails = ({ post }) => (
  <Container verticalMargin>
    <Grid>
      {post && (
        <PostCard
          key={post.id}
          caption={post.caption}
          photoUrl={post.photoUrl}
          avatarUrl={post.user.avatarUrl}
          username={post.user.username}
          location={post.location}
          comments={post.comments}
          likesCount={post.likesCount}
          likedByUser={post.likedByUser}
          id={post.id}
          post={post}
        />
      )}
    </Grid>
  </Container>
);

PostDetails.propTypes = {
  post: PropTypes.object,
};

const Grid = styled.div`
  display: grid;
  grid-gap: 60px 0;
`;

export default PostDetails;
