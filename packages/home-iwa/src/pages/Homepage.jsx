import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { changeTabs } from '../redux/actions';

export class PlainHomepage extends React.Component {
  state = {
    hideSettings: true,
  };

  onButtonClick = () => {
    const { onChangeTabs } = this.props;
    const { hideSettings } = this.state;
    onChangeTabs(hideSettings);
    this.setState({ hideSettings: !hideSettings });
  };

  render() {
    const { hideSettings } = this.state;
    return (
      <Card title="Set tab appearance" style={{ width: '300px', margin: '100px auto 0' }}>
        <p>
          Will update the appearance of the &ldquo;Journal&rdquo; tab and
          {hideSettings ? ' hide' : ' show'}
          {' '}
the settings tab.
        </p>
        <Button type="primary" onClick={this.onButtonClick}>
          Update tabs
        </Button>
      </Card>
    );
  }
}
PlainHomepage.propTypes = {
  onChangeTabs: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onChangeTabs: changeTabs,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(PlainHomepage);
