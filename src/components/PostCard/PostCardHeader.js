import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import Avatar from '../Avatar';
import Image from '../Image';
import ThreeDots from '../../assets/ellipsis.svg';

const PostCardHeader = ({ avatarUrl, username, location, onClickOpenMoreOptions }) => (
  <Header>
    <AvatarContainer>
      <Avatar src={avatarUrl} />
    </AvatarContainer>
    <MetadataContainer>
      <Username>{username}</Username>
      <Location>{location}</Location>
    </MetadataContainer>
    {onClickOpenMoreOptions && (
      <MoreOptionsWrap>
        <Icon onClick={onClickOpenMoreOptions}>
          <Image src={ThreeDots} />
        </Icon>
      </MoreOptionsWrap>
    )}
  </Header>
);

PostCardHeader.propTypes = {
  avatarUrl: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  onClickOpenMoreOptions: PropTypes.func,
};

const MoreOptionsWrap = styled.div`
  margin-left: auto;
`;

const Icon = styled(Button)`
  width: 24px;
  height: 24px;
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

const MetadataContainer = styled.div`
  display: inline-grid;
`;

const Username = styled.a`
  font-weight: bold;
  font-size: 15px;
`;

const Location = styled.span``;

export default PostCardHeader;
