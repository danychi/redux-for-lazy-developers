import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ul from '../../../components/Ul';
import Li from '../../../components/Li';

const ProfileDetails = ({ details }) => (
  <Wrap>
    <Name>{details.name}</Name>
    <Counters>
      <CounterEntry>
        <strong>{details.postCount}</strong> posts
      </CounterEntry>
      <CounterEntry>
        <strong>{details.followersCount}</strong> followers
      </CounterEntry>
      <CounterEntry>
        <strong>{details.followingCount}</strong> following
      </CounterEntry>
    </Counters>
    <UserDescriptionContainer>
      <FullName>{details.fullName}</FullName>
      <Description>{details.description}</Description>
    </UserDescriptionContainer>
  </Wrap>
);

const Wrap = styled.section`
  display: block;
`;

const Name = styled.h1`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  margin: 0 0 20px;
  font-size: 28px;
`;

const FullName = styled.h2`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 0;
`;

const Counters = styled(Ul)`
  display: flex;
`;

const CounterEntry = styled(Li)`
  font-size: 16px;
  margin-right: 40px;
`;

const UserDescriptionContainer = styled.div`
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  margin: 0;
`;

ProfileDetails.propTypes = {
  details: PropTypes.object,
};

export default ProfileDetails;
