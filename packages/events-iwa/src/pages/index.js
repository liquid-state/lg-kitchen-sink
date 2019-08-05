import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch } from 'react-router';
import { Route } from '@project/common';

import '../style.less';

import NavPage from '@project/common/src/components/NavPage';
import EventPage from '@project/common/src/components/EventPage';
import { SetTabAppearancePageExample, AppResetExample, OnlineStatusExample } from './app';

const documentationBaseURL = 'https://docs.liquid-gears.com/iwa-framework/events/';

const AppResetComponent = (
  <EventPage
    eventName="reset"
    description={(
      <div>
        <p>
          Resets the entire app, destroying all IWAs, navigation controls and contexts and reloading
          App Data, as if users had just launched the app.
        </p>
      </div>
)}
    documentationLink={`${documentationBaseURL}app#reset`}
    example={<AppResetExample />}
  />
);

const AppOnlineStatusComponent = (
  <EventPage
    eventName="reset"
    description={(
      <div>
        <p>IWA needs to know if the device/app is currently online or offline.</p>
      </div>
)}
    documentationLink={`${documentationBaseURL}app#online_status`}
    example={<OnlineStatusExample />}
  />
);

const AppSetTabAppearanceComponent = (
  <EventPage
    eventName="set_tab_appearance"
    description={(
      <div>
        <p>Only relevant to tabbed apps.</p>
        <p>Used to update the icon, text or displayed/hidden status of a tab.</p>
      </div>
)}
    documentationLink={`${documentationBaseURL}app#set_tab_appearance`}
    example={<SetTabAppearancePageExample />}
  />
);

const routes = [
  {
    path: '/',
    component: (
      <NavPage
        title="Events framework"
        navItems={[
          { path: 'app', name: 'app domain' },
          { path: 'iwa', name: 'iwa domain' },
          { path: 'kv', name: 'kv domain' },
        ]}
      />
    ),
  },
  {
    path: '/app',
    component: (
      <NavPage
        title="app domain"
        linksPrefix="/app"
        navItems={[
          { path: 'reset', name: 'reset' },
          { path: 'online_status', name: 'online_status' },
          { path: 'set_tab_appearance', name: 'set_tab_appearance' },
        ]}
      />
    ),
  },
  {
    path: '/app/reset',
    component: AppResetComponent,
  },
  {
    path: '/app/online_status',
    component: AppOnlineStatusComponent,
  },
  {
    path: '/app/set_tab_appearance',
    component: AppSetTabAppearanceComponent,
  },
];

export default hot(module)(() => (
  <Switch>
    {routes.map(r => (
      <Route path={r.path} exact component={() => r.component} />
    ))}
  </Switch>
));
