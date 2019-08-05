import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SvgShowCase extends React.Component {
  state = {};

  render() {
    const { title, svgAsset } = this.props;
    return (
      <div className="container">
        <h1>{title}</h1>
        <img src={svgAsset} style={{ width: '300px', margin: '50px auto 0' }} alt="SVG example" />
      </div>
    );
  }
}
SvgShowCase.propTypes = {
  title: PropTypes.string.isRequired,
  svgAsset: PropTypes.isRequired,
};

const mapActionsToProps = {};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(SvgShowCase);
