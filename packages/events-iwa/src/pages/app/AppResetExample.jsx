import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { appReset } from '../../redux/actions';

export class Example extends React.Component {
  onButtonClick = () => {
    const { onAppReset } = this.props;
    onAppReset();
  };

  render() {
    return (
      <Card title="Example">
        <p>Click the button to reset this entire app.</p>
        <Button type="primary" onClick={this.onButtonClick}>
          Reset the app
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onAppReset: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onAppReset: appReset,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
