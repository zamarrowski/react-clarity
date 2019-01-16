import React from 'react';

import { storiesOf } from '@storybook/react';

import Tabs from './Tabs';

storiesOf('Tabs', module)
  .add('simple', () => (
    <Tabs tabs={[
      {
        name: 'yep',
        content: 'tumami'
      }, 
      {
        name: 'lol',
        content: 'tupapi'
      }
    ]} />
  ))
