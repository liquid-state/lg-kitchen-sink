import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { launchIWA } from '../../redux/actions';

export class Example extends React.Component {
  onLaunchIWA = () => {
    const { onLaunchIWA } = this.props;
    onLaunchIWA('lab');
  };

  render() {
    return (
      <Card title="Example">
        <p>
          Click the following button to launch the lab IWA with a push
          transition in this tab.
        </p>
        <Button type="primary" onClick={this.onLaunchIWA}>
          Launch Lab IWA
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onLaunchIWA: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onLaunchIWA: launchIWA,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
