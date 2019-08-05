import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { onlineStatus } from '../../redux/actions';

export class Example extends React.Component {
  onButtonClick = () => {
    const { onOnlineStatus } = this.props;
    onOnlineStatus();
  };

  render() {
    return (
      <Card title="Example">
        <p>IWA needs to know if the device/app is currently online or offline.</p>
        <Button type="primary" onClick={this.onButtonClick}>
          Get online status
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onOnlineStatus: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onOnlineStatus: onlineStatus,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
