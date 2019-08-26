import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { sendCustomEvent } from '../../redux/actions';

export class Example extends React.Component {
  onSendEventToHomeTab = () => {
    const { onSendCustomEvent } = this.props;
    const requestData = {
      tab_id: 'home',
      webapp_id: 'home',
      purpose: 'do-a-thing',
      data: {
        foo: 'some',
        bar: 'value',
      },
    };
    onSendCustomEvent({ requestData });
  };

  onSendEventToService = () => {
    const { onSendCustomEvent } = this.props;
    const requestData = {
      service_id: 'service-1',
      purpose: 'do-a-thing',
      data: {
        foo: 'foo value',
        bar: 'bar value',
      },
    };
    onSendCustomEvent({ requestData });
  };

  render() {
    return (
      <Card title="Example">
        <p>
          Click the following button to send a custom event to the
          &ldquo;Home&rdquo; IWA running in the &ldquo;Home&rdquo; tab.
        </p>
        <Button type="primary" onClick={this.onSendEventToHomeTab}>
          Send event to &ldquo;Home&rdquo; tab
        </Button>
        <hr />
        <p>
          Click the following button to send a custom event to the service
          &ldquo;Service 1&rdquo;.
        </p>
        <Button type="primary" onClick={this.onSendEventToService}>
          Send event to &ldquo;Service 1&rdquo;
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
