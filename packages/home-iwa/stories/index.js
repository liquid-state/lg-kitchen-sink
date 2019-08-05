import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Index from '../src/pages';

import '../src/style.less';

storiesOf('Home/Pages', module).add('Index', () => <Index />);
