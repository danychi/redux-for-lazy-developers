import React from 'react';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import PostCard from '../../components/PostCard';
import MoreOptionsModal from './MoreOptionsModal';

const HomePage = ({
  posts,
  onLike,
  actions,
  updateMoreOptionsModalVisibility,
  isMoreOptionsModalVisible,
  onClickOpenMoreOptions,
  onAddComment,
}) => (
  <Container verticalMargin>
    <Grid>
      {Array.isArray(posts) &&
        !isEmpty(posts) &&
        posts.map((post) => (
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
            onLike={() => onLike(post)}
            onClickOpenMoreOptions={() => onClickOpenMoreOptions(post)}
            onAddComment={onAddComment}
            id={post.id}
            post={post}
          />
        ))}
      <MoreOptionsModal
        actions={actions}
        isOpen={isMoreOptionsModalVisible}
        onRequestClose={() => updateMoreOptionsModalVisibility(false)}
      />
    </Grid>
  </Container>
);

HomePage.propTypes = {
  posts: PropTypes.array,
  onLike: PropTypes.func,
  actions: PropTypes.array,
  updateMoreOptionsModalVisibility: PropTypes.func,
  isMoreOptionsModalVisible: PropTypes.bool,
  onClickOpenMoreOptions: PropTypes.func,
  onAddComment: PropTypes.func,
};

const Grid = styled.div`
  display: grid;
  grid-gap: 60px 0;
`;

export default HomePage;
