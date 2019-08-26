import React from "react";
import { hot } from "react-hot-loader";
import { Switch } from "react-router";
import { Route } from "@project/common";

import "../style.less";

import NavPage from "@project/common/src/components/NavPage";
import EventPage from "@project/common/src/components/EventPage";
import {
  SetTabAppearancePageExample,
  AppResetExample,
  OnlineStatusExample
} from "./app";
import { IWACustomExample } from "./iwa";
import { UserfilesPickfileExample, UserfilesUploadExample } from "./userfiles";

const documentationBaseURL =
  "https://docs.liquid-gears.com/iwa-framework/events/";

const AppResetComponent = (
  <EventPage
    eventName="reset"
    description={
      <div>
        <p>
          Resets the entire app, destroying all IWAs, navigation controls and
          contexts and reloading App Data, as if users had just launched the
          app.
        </p>
      </div>
    }
    documentationLink={`${documentationBaseURL}app#reset`}
    example={<AppResetExample />}
  />
);

const AppOnlineStatusComponent = (
  <EventPage
    eventName="reset"
    description={
      <div>
        <p>
          IWA needs to know if the device/app is currently online or offline.
        </p>
      </div>
    }
    documentationLink={`${documentationBaseURL}app#online_status`}
    example={<OnlineStatusExample />}
  />
);

const AppSetTabAppearanceComponent = (
  <EventPage
    eventName="set_tab_appearance"
    description={
      <div>
        <p>Only relevant to tabbed apps.</p>
        <p>
          Used to update the icon, text or displayed/hidden status of a tab.
        </p>
      </div>
    }
    documentationLink={`${documentationBaseURL}app#set_tab_appearance`}
    example={<SetTabAppearancePageExample />}
  />
);

const IWACustomComponent = (
  <EventPage
    eventName="custom"
    description={
      <div>
        <p>Sends a custom event to another IWA.</p>
      </div>
    }
    documentationLink={`${documentationBaseURL}iwa#custom`}
    example={<IWACustomExample />}
  />
);

const UserfilesPickfileComponent = (
  <EventPage
    eventName="pickfile"
    description={
      <div>
        <p>Choose a file from the document picker, or take a photo or video.</p>
      </div>
    }
    documentationLink={`${documentationBaseURL}userfiles#pickfile`}
    example={<UserfilesPickfileExample />}
  />
);

const UserfilesUploadComponent = (
  <EventPage
    eventName="upload"
    description={
      <div>
        <p>Upload a file previously selected with the pickfile event.</p>
      </div>
    }
    documentationLink={`${documentationBaseURL}userfiles#upload`}
    example={<UserfilesUploadExample />}
  />
);

const routes = [
  {
    path: "/",
    component: (
      <NavPage
        title="Events framework"
        navItems={[
          { path: "app", name: "app domain" },
          { path: "iwa", name: "iwa domain" },
          { path: "kv", name: "kv domain" },
          { path: "userfiles", name: "userfiles domain" }
        ]}
      />
    )
  },
  {
    path: "/app",
    component: (
      <NavPage
        title="app domain"
        linksPrefix="/app"
        navItems={[
          { path: "reset", name: "reset" },
          { path: "online_status", name: "online_status" },
          { path: "set_tab_appearance", name: "set_tab_appearance" }
        ]}
      />
    )
  },
  {
    path: "/app/reset",
    component: AppResetComponent
  },
  {
    path: "/app/online_status",
    component: AppOnlineStatusComponent
  },
  {
    path: "/app/set_tab_appearance",
    component: AppSetTabAppearanceComponent
  },
  {
    path: "/iwa",
    component: (
      <NavPage
        title="iwa domain"
        linksPrefix="/iwa"
        navItems={[{ path: "custom", name: "custom" }]}
      />
    )
  },
  {
    path: "/iwa/custom",
    component: IWACustomComponent
  },
  {
    path: "/userfiles",
    component: (
      <NavPage
        title="userfiles domain"
        linksPrefix="/userfiles"
        navItems={[
          { path: "pickfile", name: "pickfile" },
          { path: "upload", name: "upload" }
        ]}
      />
    )
  },
  {
    path: "/userfiles/pickfile",
    component: UserfilesPickfileComponent
  },
  {
    path: "/userfiles/upload",
    component: UserfilesUploadComponent
  }
];

export default hot(module)(() => (
  <Switch>
    {routes.map(r => (
      <Route path={r.path} exact component={() => r.component} />
    ))}
  </Switch>
));
