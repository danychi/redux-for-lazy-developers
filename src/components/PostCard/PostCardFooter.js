import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import Image from '../Image';
import Comment from '../Comment';
import Ul from '../Ul';
import Heart from '../../assets/heart.svg';
import HeartFilled from '../../assets/heart-red.svg';
import Input from '../Input';

const PostCardFooter = ({ caption, username, comments, likesCount, likedByUser, onLike, onAddComment, id, post }) => (
  <Footer>
    <Actions>
      <Icon onClick={onLike}>
        <Image src={likedByUser ? Heart : HeartFilled} />
      </Icon>
    </Actions>
    <LikesCounter>
      <strong>{likesCount} likes</strong>
    </LikesCounter>
    <Comments>
      <Comment key={username} username={username} comment={caption} />
      {comments && comments.map(({ username, body }, id) => <Comment key={id} username={username} comment={body} />)}
    </Comments>
    <AddCommentWrap>
      <StyledForm onSubmit={(e) => onAddComment(e, post)}>
        <StyledInput placeholder="Add a comment..." id={`add-comment-input-${id}`} />
      </StyledForm>
    </AddCommentWrap>
  </Footer>
);

PostCardFooter.propTypes = {
  caption: PropTypes.string,
  username: PropTypes.string,
  onLike: PropTypes.func,
  comments: PropTypes.array,
  likesCount: PropTypes.number,
  likedByUser: PropTypes.bool,
  onAddComment: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  post: PropTypes.object,
};

const Actions = styled.div`
  display: flex;
`;

const Icon = styled(Button)`
  width: 24px;
  height: 24px;
`;

const Footer = styled.footer`
  padding: 8px 16px;
`;

const Comments = styled(Ul)`
  display: flex;
  flex-direction: column;
`;

const LikesCounter = styled.section`
  margin: 8px 0;
`;

const AddCommentWrap = styled.section`
  margin-top: 4px;
  border-top: 1px solid #efefef;
  color: #999;
  flex-shrink: 0;
  line-height: 18px;
  min-height: 56px;
  display: flex;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledInput = styled(Input)`
  font-size: 14px;
  flex: 1;
  height: 18px;
  width: 100%;
`;

export default PostCardFooter;
