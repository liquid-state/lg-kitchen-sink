import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { List, Icon } from 'antd';
import { goToRoute, changeTabs } from '../redux/actions';

export class PlainHomepage extends React.Component {
  state = {
    hideSettings: true,
    menuItems: ['General', 'Navigation', 'Data Entry', 'Data Display', 'Feedback', 'Other'],
  };

  onButtonClick = () => {
    const { onChangeTabs } = this.props;
    const { hideSettings } = this.state;
    onChangeTabs(hideSettings);
    this.setState({ hideSettings: !hideSettings });
  };

  goToItem = (item) => {
    const route = `/${item.toLowerCase().replace(' ', '-')}`;
    const { onGoToRoute } = this.props;
    onGoToRoute(route);
  };

  render() {
    const { menuItems } = this.state;
    return (
      <List
        header="Liquid State UI Kit"
        bordered
        dataSource={menuItems}
        renderItem={item => (
          <List.Item onClick={() => this.goToItem(item)}>
            <List.Item.Meta description={item} />
            <div>
              <Icon type="right" />
            </div>
          </List.Item>
        )}
      />
    );
  }
}
PlainHomepage.propTypes = {
  onGoToRoute: PropTypes.func.isRequired,
  onChangeTabs: PropTypes.func.isRequired,
};

const mapActionsToProps = {
  onGoToRoute: goToRoute,
  onChangeTabs: changeTabs,
};

export default compose(
  connect(
    null,
    mapActionsToProps,
  ),
)(PlainHomepage);
