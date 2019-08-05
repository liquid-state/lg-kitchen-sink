import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch } from 'react-router';
import { Route } from '@project/common';

import '../style.less';

import NavPage from '@project/common/src/components/NavPage';
import SvgShowCasePage from './SvgShowCase';
import { fillColourAnim, fillOpacityAnim } from '../assets';

export default hot(module)(() => (
  <Switch>
    <Route
      path="/"
      exact
      component={() => (
        <NavPage
          title="Tests &amp; Experiments"
          navItems={[{ path: 'svg_animations', name: 'SVG animations' }]}
        />
      )}
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
      component={() => <SvgShowCasePage title="fill colour anim" svgAsset={fillColourAnim} />}
    />
    <Route
      exact
      path="/svg_animations/fill_opacity_anim"
      component={() => <SvgShowCasePage title="fill opacity anim" svgAsset={fillOpacityAnim} />}
    />
  </Switch>
));
