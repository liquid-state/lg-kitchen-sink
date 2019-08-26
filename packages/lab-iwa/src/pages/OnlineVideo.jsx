import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class OnlineVideo extends React.Component {
  state = {};

  render() {
    alert("Modify the video URL");
    const url = "https://XXXXXX.s3-ap-southeast-2.amazonaws.com/test.mov";
    return (
      <div className="container">
        <h1>Online Video</h1>
        <video
          controls
          width="250"
          style={{ display: "block", margin: "0 auto" }}
        >
          <source src={url} type="video/quicktime" />
          Sorry, your browser doesn't support embedded videos.
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
    mapActionsToProps
  )
)(OnlineVideo);
