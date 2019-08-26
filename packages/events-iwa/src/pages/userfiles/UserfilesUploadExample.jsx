import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button, Card } from "antd";
import { sendUploadEvent } from "../../redux/actions";

export class Example extends React.Component {
  onSendUploadEvent = () => {
    const { onSendUploadEvent, pickedFilePath } = this.props;
    onSendUploadEvent({ path: pickedFilePath });
  };

  render() {
    const { pickedFilePath } = this.props;
    return (
      <Card title="Example">
        <p>
          Click the following button to ask the native app to upload a file
          previously selected with the userfiles/pickfile event.
        </p>
        {pickedFilePath ? (
          <div>
            <p>Path of picked file: {pickedFilePath}</p>
            <Button type="primary" onClick={this.onSendUploadEvent}>
              Send "upload" event
            </Button>
          </div>
        ) : null}
      </Card>
    );
  }
}
Example.propTypes = {
  pickedFilePath: PropTypes.string,
  onSendUploadEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    pickedFilePath: state.userfiles.pickedFilePath
  };
};

const mapActionsToProps = {
  onSendUploadEvent: sendUploadEvent
};

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps
  )
)(Example);
