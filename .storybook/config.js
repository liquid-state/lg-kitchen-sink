import { configure } from '@storybook/react';
import setupRouting from './routing';

function loadStories() {
  require("home-iwa/stories");

  require("ui-kit-iwa/stories");

  require("events-iwa/stories");

  require("lab-iwa/stories")
}

setupRouting();
configure(loadStories, module);