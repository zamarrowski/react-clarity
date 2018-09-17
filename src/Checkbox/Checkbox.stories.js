import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';


storiesOf('Checkbox', module)
  .add('with text', () => <Checkbox label="My checkbox"/>)
