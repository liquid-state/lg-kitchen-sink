import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

export class OnlineVideo extends React.Component {
  state = {};

  render() {
    const url = 'https://ls-s3tests-au.s3-ap-southeast-2.amazonaws.com/test.mp4';
    return (
      <div className="container">
        <h1>Online Video</h1>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          width="250"
          style={{ display: 'block', margin: '0 auto' }}
        >
          <source src={url} type="video/mp4" />
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </div>
    );
  }
}
OnlineVideo.propTypes = {};

const mapActionsToProps = {};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(OnlineVideo);
