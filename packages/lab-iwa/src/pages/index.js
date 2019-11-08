import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch } from 'react-router';
import { Route } from '@project/common';

import '../style.less';

import NavPage from '@project/common/src/components/NavPage';
import SvgShowCasePage from './SvgShowCase';
import ConnectedOnlineVideo from './OnlineVideo';
import { fillColourAnim, fillOpacityAnim } from '../assets';
import InteractiveSvgPage from './InteractiveSvg';
import GestureScroll from './GestureScroll';

export default hot(module)(() => (
  <Switch>
    <Route
      path="/"
      exact
      component={() => (
        <NavPage
          title="Tests &amp; Experiments"
          navItems={[
            { path: 'svg_animations', name: 'SVG animations' },
            { path: 'interactive', name: 'Interactive SVG animations' },
            { path: 'gestures', name: 'Gesture Scroll' },
            { path: 'online_video', name: 'Online video' },
          ]}
        />
      )}
    />
    <Route
      exact
      path="/online_video"
      component={() => <ConnectedOnlineVideo />}
    />
    <Route
      exact
      path="/svg_animations"
      component={() => (
        <NavPage
          title="SVG animations"
          linksPrefix="/svg_animations"
          navItems={[
            { path: 'fill_colour_anim', name: 'fill colour anim' },
            { path: 'fill_opacity_anim', name: 'fill opacity anim' },
          ]}
        />
      )}
    />
    <Route
      exact
      path="/svg_animations/fill_colour_anim"
      component={() => (
        <SvgShowCasePage title="fill colour anim" svgAsset={fillColourAnim} />
      )}
    />
    <Route
      exact
      path="/svg_animations/fill_opacity_anim"
      component={() => (
        <SvgShowCasePage title="fill opacity anim" svgAsset={fillOpacityAnim} />
      )}
    />
    <Route exact path="/interactive" component={InteractiveSvgPage} />
    <Route exact path="/gestures" component={GestureScroll} />
  </Switch>
));
