import React, { Fragment } from 'react';
import { prop } from 'ramda';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../components/Container';
import Gallery from './Gallery';
import media from '../../styles/media';
import ActionBar from './ActionBar';
import DetailsForm from './DetailsForm';

const AddPostPage = ({
  gallery,
  selectedImage,
  setSelectedImage,
  step,
  setStep,
  onSavePost,
  setCaption,
  setLocation,
}) => (
  <StyledContainer>
    {step === 0 && (
      <Fragment>
        <SelectedImage src={prop('photoUrl', selectedImage)} />
        <GalleryContainer>
          <Gallery images={gallery} selectedImage={selectedImage} onClickImage={setSelectedImage} />
        </GalleryContainer>
        <ActionBar onClickNext={() => setStep(1)} isNextButtonDisabled={!selectedImage} />
      </Fragment>
    )}
    {step === 1 && (
      <Fragment>
        <DetailsForm
          selectedImage={prop('photoUrl', selectedImage)}
          // eslint-disable-next-line
          profileImage="https://scontent-ams3-1.cdninstagram.com/vp/ac842a344af792d692358473bcadeffd/5D665EFD/t51.2885-19/s150x150/46819842_333684380565961_9093640698548191232_n.jpg?_nc_ht=scontent-ams3-1.cdninstagram.com"
          onSavePost={onSavePost}
          setCaption={setCaption}
          setLocation={setLocation}
        />
        <ActionBar onClickBack={() => setStep(0)} onClickNext={() => {}} />
      </Fragment>
    )}
  </StyledContainer>
);

AddPostPage.propTypes = {
  gallery: PropTypes.array,
  selectedImage: PropTypes.object,
  setSelectedImage: PropTypes.func,
  step: PropTypes.number,
  setStep: PropTypes.func,
  onSavePost: PropTypes.func,
  setCaption: PropTypes.func,
  setLocation: PropTypes.func,
};

const SelectedImage = styled.img`
  object-fit: contain;
  background: #efefef;
  width: 100%;
  height: 20vh;

  ${media.tabletPortrait`
    height: 40vh;
  `};
`;

const GalleryContainer = styled.div`
  overflow-y: scroll;
  height: 80vh;

  ${media.tabletPortrait`
    height: 60vh;
  `};
`;

const StyledContainer = styled(Container)`
  padding: 0;
`;

export default AddPostPage;
