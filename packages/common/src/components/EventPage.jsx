import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { compose } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Affix } from 'antd';

// eslint-disable-next-line react/prefer-stateless-function
export class EventPage extends React.Component {
  render() {
    const {
      eventName, description, documentationLink, example,
    } = this.props;
    return (
      <div className="container event">
        <Affix>
          <h1>{eventName}</h1>
        </Affix>
        {description ? (
          <Card title="Description" className="description">
            {description}
          </Card>
        ) : null}
        {documentationLink ? (
          <Card title="Documentation">
            <p>
              <a href={documentationLink} className="primary">
                Open in browser
              </a>
            </p>
          </Card>
        ) : null}
        {example || null}
      </div>
    );
  }
}
EventPage.propTypes = {
  eventName: PropTypes.string,
  description: PropTypes.object,
  documentationLink: PropTypes.string,
  example: PropTypes.object,
};
EventPage.defaultProps = {
  eventName: 'Unknown',
  description: null,
  documentationLink: null,
  example: null,
};

const mapActionsToProps = {};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(EventPage);
