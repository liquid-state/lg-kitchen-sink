import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { changeTabs } from '../../redux/actions';

export class Example extends React.Component {
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
      <Card title="Example">
        <p>
          Will update the appearance of the &ldquo;Events&rdquo; tab and
          {hideSettings ? ' hide' : ' show'}
          {' '}
the &ldquo;Lab&rdquo; tab.
        </p>
        <Button type="primary" onClick={this.onButtonClick}>
          Update tabs
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
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
)(Example);
