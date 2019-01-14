import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';


storiesOf('Checkbox', module)
  .add('with text', () => <Checkbox label="My checkbox"/>)
  .add('with onChangeFunction ', () => <Checkbox onCheck={(value) => console.log(value)} label="My checkbox"/>)
