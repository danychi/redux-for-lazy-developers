import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';
import Image from '../Image';
import PostCardHeader from './PostCardHeader';
import PostCardFooter from './PostCardFooter';

const PostCard = ({
  photoUrl,
  caption,
  avatarUrl,
  username,
  location,
  comments,
  likesCount,
  likedByUser,
  onLike,
  onClickOpenMoreOptions,
  onAddComment,
  id,
  post,
  onDeleteComment,
  userId,
}) => (
  <article>
    <Wrap>
      <PostCardHeader
        avatarUrl={avatarUrl}
        username={username}
        location={location}
        onClickOpenMoreOptions={onClickOpenMoreOptions}
      />
      <Image src={photoUrl} alt={caption} />
      <PostCardFooter
        caption={caption}
        username={username}
        comments={comments}
        likesCount={likesCount}
        likedByUser={likedByUser}
        onLike={onLike}
        onAddComment={onAddComment}
        id={id}
        post={post}
        onDeleteComment={onDeleteComment}
        userId={userId}
      />
    </Wrap>
  </article>
);

PostCard.propTypes = {
  photoUrl: PropTypes.string,
  caption: PropTypes.string,
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  onLike: PropTypes.func,
  comments: PropTypes.array,
  likesCount: PropTypes.number,
  likedByUser: PropTypes.bool,
  onClickOpenMoreOptions: PropTypes.func,
  onAddComment: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  post: PropTypes.object,
  onDeleteComment: PropTypes.func,
  userId: PropTypes.string,
};

const Wrap = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  font-size: 14px;
`;

export default PostCard;
