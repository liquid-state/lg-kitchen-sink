import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { launchEmail } from '../../redux/actions';

export class Example extends React.Component {
  onLaunchEmail = () => {
    const to = 'test@example.com';
    const cc = 'test@example.com';
    const bcc = 'test@example.com';
    const subject = 'A test email';
    const body = 'This is a test email...\n\nWith a second line.';
    const { onLaunchEmail } = this.props;
    onLaunchEmail(to, cc, bcc, subject, body);
  };

  render() {
    return (
      <Card title="Example">
        <p>
          Click the following button to launch the device&apos;s email composing
          interface.
        </p>
        <Button type="primary" onClick={this.onLaunchEmail}>
          Launch the email composer
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onLaunchEmail: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onLaunchEmail: launchEmail,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
