import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Buttons outline', module)
  .add('regular', () => <Button>My button</Button>)
  .add('success', () => <Button success>My button</Button>)
  .add('warning', () => <Button warning>My button</Button>)
  .add('disabled', () => <Button disabled>My button</Button>)

  storiesOf('Buttons solid', module)
  .add('regular', () => <Button solid>My button</Button>)
  .add('success', () => <Button solid success>My button</Button>)
  .add('warning', () => <Button solid warning>My button</Button>)
  .add('disabled', () => <Button solid disabled>My button</Button>)
