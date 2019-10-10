import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { sendPickfileEvent } from '../../redux/actions';

export class Example extends React.Component {
  onSendPickfileEvent = () => {
    const { onSendPickfileEvent } = this.props;
    onSendPickfileEvent();
  };

  render() {
    const { pickedFilePath } = this.props;
    return (
      <Card title="Example">
        <p>
          Click the following button to ask the native app to prompt the user to
          choose a file with the &ldquo;image/*&rdquo; mme type.
        </p>
        <Button type="primary" onClick={this.onSendPickfileEvent}>
          Send &ldquo;pickfile&rdquo; event
        </Button>
        {pickedFilePath ? (
          <p>
            Path of picked file:
            {pickedFilePath}
          </p>
        ) : null}
      </Card>
    );
  }
}
Example.propTypes = {
  pickedFilePath: PropTypes.string.isRequired,
  onSendPickfileEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pickedFilePath: state.userfiles.pickedFilePath,
});

const mapActionsToProps = {
  onSendPickfileEvent: sendPickfileEvent,
};

export default compose(
  connect(
    mapStateToProps,
    mapActionsToProps,
  ),
)(Example);
