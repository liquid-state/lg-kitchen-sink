import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
export class PlainHomepage extends React.Component {
  render() {
    return <h1>Kitchen Sink</h1>;
  }
}

export default compose(
  connect(
    null,
    null,
  ),
)(PlainHomepage);
