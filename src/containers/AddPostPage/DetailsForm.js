import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageCard from '../../components/ImageCard';
import Avatar from '../../components/Avatar';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';

const DetailsForm = ({ selectedImage, profileImage, onSavePost, setCaption, setLocation }) => (
  <form id="addAPostForm" onSubmit={onSavePost}>
    <CaptionWrap>
      <Avatar src={profileImage} />
      <CaptionInput
        placeholder="Write a caption…"
        autoComplete="off"
        autoCorrect="off"
        name="caption"
        onChange={setCaption}
      />
      <ImageCard src={selectedImage} />
    </CaptionWrap>
    <LocationWrap name="location">
      <Label>
        <strong>Add Location</strong>
        <LocationInput onChange={setLocation} name="location" />
      </Label>
    </LocationWrap>
  </form>
);

const CaptionWrap = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
  grid-gap: 0 15px;
  background-color: #fff;
  border: 1px solid #efefef;
  padding: 16px;
  margin-bottom: 10px;
`;

const LocationWrap = styled.section`
  background-color: #fff;
  border: 1px solid #efefef;
  padding: 16px;
`;

const CaptionInput = styled(TextArea)`
  font-size: 14px;
  line-height: 18px;
`;

const Label = styled.label`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
`;

const LocationInput = styled(Input)`
  font-size: 14px;
  line-height: 18px;
  margin-left: 15px;
  flex: 1;
`;

DetailsForm.propTypes = {
  selectedImage: PropTypes.string,
  profileImage: PropTypes.string,
  onSavePost: PropTypes.func,
  setCaption: PropTypes.func,
  setLocation: PropTypes.func,
};

export default DetailsForm;
