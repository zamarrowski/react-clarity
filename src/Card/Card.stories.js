import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from './Card'
import Button from './../Button/Button';


storiesOf('Card', module)
  .add('simple', () => <Card title="My card">Content card</Card>)
  .add('with actions', () => <Card title="My card" actions={<Button>Button</Button>}>Content card</Card>)
  .add('with image', () => <Card image="https://vmware.github.io/clarity/assets/images/documentation/cards/placeholder_350x150.png" title="My card" actions={<Button>Button</Button>}>Content card</Card>)
