import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from './Header';


storiesOf('Header', module)
  .add('simple', () => <Header title="My Header" />)
  .add('with buttons', () => <Header title="My Header" navLinks={[{text: 'Dashboard', link: '/', active: true}, {text: 'Interactive Analytics', link: '/ie'}]}/>)
