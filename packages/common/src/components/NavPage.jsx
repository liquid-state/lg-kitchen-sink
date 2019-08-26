import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { compose } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { List, Icon } from 'antd';
import { goToRoute } from '../redux/actions';

export class NavPage extends React.Component {
  state = {};

  goToItem = (item) => {
    const { linksPrefix, onGoToRoute } = this.props;
    const route = `${linksPrefix}/${item.path}`;
    onGoToRoute(route);
  };

  render() {
    const { title, navItems } = this.props;
    return (
      <div className="container">
        <h1>{title}</h1>
        <List
          className="nav"
          bordered
          dataSource={navItems}
          renderItem={item => (
            <List.Item onClick={() => this.goToItem(item)}>
              <List.Item.Meta description={item.name} />
              <div>
                <Icon type="right" />
              </div>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
NavPage.propTypes = {
  title: PropTypes.string,
  linksPrefix: PropTypes.string,
  navItems: PropTypes.array,
  onGoToRoute: PropTypes.func.isRequired,
};
NavPage.defaultProps = {
  title: 'Untitled',
  linksPrefix: '',
  navItems: ['Item 1', 'Item 2'],
};

const mapActionsToProps = {
  onGoToRoute: goToRoute,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(NavPage);
