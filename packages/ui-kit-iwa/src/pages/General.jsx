import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

export class General extends React.Component {
  state = {};

  render() {
    return <h1>General</h1>;
  }
}

const mapActionsToProps = {};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(General);
