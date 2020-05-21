import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Card } from 'antd';
import { launchDocument } from '../../redux/actions';

const exampleProductId = 'com.dummy.v3demo.b5b740';
const examplePageSlug = 'page-1';

export class Example extends React.Component {
  onOpenDocument = () => {
    const { onOpenDocument } = this.props;
    const productId = exampleProductId;
    const pageSlug = examplePageSlug;
    onOpenDocument(productId, pageSlug);
  };

  render() {
    return (
      <Card title="Example">
        <p>
          Click the following button to open a document published by Ubiquity.
        </p>
        <div>
          Document details:
          <dl>
            <dt>product id:</dt>
            <dd>{exampleProductId}</dd>
            <dt>page slug:</dt>
            <dd>{examplePageSlug}</dd>
          </dl>
        </div>
        <Button type="primary" onClick={this.onOpenDocument}>
          Open Ubiquity document
        </Button>
      </Card>
    );
  }
}
Example.propTypes = {
  onOpenDocument: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onOpenDocument: launchDocument,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(Example);
