import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from './Alert';


storiesOf('Alert', module)
  .add('standard success', () => <Alert standard message="Alert" success/>)
  .add('standard info', () => <Alert standard message="Alert" info/>)
  .add('standard warning', () => <Alert standard message="Alert" warning/>)
  .add('standard error', () => <Alert standard message="Alert" error/>)


storiesOf('Alert app level', module)
.add('standard success', () => <Alert appLevel message="Alert" success/>)
.add('standard info', () => <Alert appLevel message="Alert" info/>)
.add('standard warning', () => <Alert appLevel message="Alert" warning/>)
.add('standard error', () => <Alert appLevel message="Alert" error/>)
