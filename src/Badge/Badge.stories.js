import React from 'react';

import { storiesOf } from '@storybook/react';

import Badge from './Badge';


storiesOf('Badges', module)
  .add('success', () => <Badge text="94" success/>)
  .add('info', () => <Badge text="10" info/>)
  .add('warning', () => <Badge text="333" format="true" warning/>)
  .add('danger', () => <Badge text="5" danger/>)
