import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { switchTabs } from '../../redux/actions';

export class Example extends React.Component {
  onButtonClick = () => {
    const { onSwitchTabs } = this.props;
    onSwitchTabs('ui-kit');
  };

  render() {
    return (
      <Card title="Example">
        <p>Click the button to switch to the &ldquo;UI Kit&rdquo; tab.</p>
        <Button type="primary" onClick={this.onButtonClick}>
          Update tabs
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onSwitchTabs: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onSwitchTabs: switchTabs,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
