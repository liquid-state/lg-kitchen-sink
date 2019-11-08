import React from 'react';

import './style.less';

import Scroll from './ScrollContainer';
import Card from './Card';

export default () => (
  <div>
    <Scroll>
      <Card title="1" />
      <Card title="2" className="blue" />
      <Card title="3" className="green" />
      <Card title="4" className="yellow" />
      <Card title="5" className="" />
      <Card title="6" className="blue" />
      <Card title="7" className="green" />
      <Card title="8" className="yellow" />
      <Card title="9" className="green" />
      <Card title="10" className="blue" />
    </Scroll>
  </div>
);
