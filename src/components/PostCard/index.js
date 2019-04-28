import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';

const PostCard = ({ photoUrl, caption, avatarUrl, username, location }) => (
  <article>
    <Wrap>
      <Header>
        <AvatarContainer>
          <Avatar src={avatarUrl} />
        </AvatarContainer>
        <MetadataContainer>
          <Username>{username}</Username>
          <Location>{location}</Location>
        </MetadataContainer>
      </Header>
      <PostCardImg src={photoUrl} alt={caption} />
      <Footer>
        <Comments>
          <Comment>
            <Username>{username}</Username>
            <Description>{caption}</Description>
          </Comment>
        </Comments>
      </Footer>
    </Wrap>
  </article>
);

const Wrap = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
`;

const PostCardImg = styled.img`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  padding: 15px 20px;
  align-items: center;
`;

const AvatarContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const MetadataContainer = styled.div`
  display: inline-grid;
`;

const Username = styled.a`
  font-weight: bold;
  font-size: 15px;
`;

const Location = styled.span`
  font-size: 14px;
`;

const Footer = styled.footer`
  padding: 15px 20px;
`;

const Comments = styled.div``;

const Comment = styled.div`
  display: inline-block;
  flex-shrink: 1;
  min-width: 0;
`;

const Description = styled.span`
  margin-left: 4px;
`;

PostCard.propTypes = {
  photoUrl: PropTypes.string,
  caption: PropTypes.string,
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
};

export default PostCard;
