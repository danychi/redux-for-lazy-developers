import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import styled from 'styled-components';
import { mapDispatchers } from '../../utils/internal/redux-utils';
import ReactGramLogo from '../../assets/logo.png';
import Header from '../../components/Header';
import { headerLinks } from './constants';
import { fetchResource } from '../../global/resources/actions';
import { RESOURCES } from '../../global/resources/constants';
import { fetchPosts } from '../../services/posts';
import { fetchProfile } from '../../services/profile';
import { fetchGallery } from '../../services/gallery';
import { generateOwnPosts } from '../../mock/data';

const App = ({ children }) => (
  <Fragment>
    <Header links={headerLinks} homeLogoSrc={ReactGramLogo} />
    <Wrapper>
      <Switch>{React.Children.toArray(children)}</Switch>
    </Wrapper>
  </Fragment>
);

const Wrapper = styled.div`
  display: block;
  width: 100%;
  min-height: 100%;
  padding-top: 60px;
`;

App.propTypes = {
  children: PropTypes.node,
};

const dispatchers = mapDispatchers({ fetchResource });

export default compose(
  withRouter,
  connect(
    undefined,
    dispatchers
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchResource([RESOURCES.posts], fetchPosts);
      this.props.fetchResource([RESOURCES.profile], fetchProfile);
      this.props.fetchResource([RESOURCES.gallery], fetchGallery);
    },
  })
)(App);
