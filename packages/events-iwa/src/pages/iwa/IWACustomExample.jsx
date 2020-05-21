import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { sendCustomEvent } from '../../redux/actions';

export class Example extends React.Component {
  onButtonClick = () => {
    const { onSendCustomEvent } = this.props;
    onSendCustomEvent();
  };

  render() {
    return (
      <Card title="Example">
        <p>Click the button to send a custom event to the &ldquo;Service 1&rdquo; IWA.</p>
        <Button type="primary" onClick={this.onButtonClick}>
          Send custom event
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onSendCustomEvent: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onSendCustomEvent: sendCustomEvent,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
