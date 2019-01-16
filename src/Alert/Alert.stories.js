import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from './Alert';
import { withReadme } from 'storybook-readme';
import AlertReadme from './AlertReadme.md'

storiesOf('Alert', module)
  .add('standard success', withReadme(AlertReadme, () => <Alert standard message="Alert" success/>))
  .add('standard info', withReadme(AlertReadme, () => <Alert standard message="Alert" info/>))
  .add('standard warning', withReadme(AlertReadme, () => <Alert standard message="Alert" warning/>))
  .add('standard error', withReadme(AlertReadme, () => <Alert standard message="Alert" error/>))


storiesOf('Alert app level', module)
.add('standard success', withReadme(AlertReadme, () => <Alert appLevel message="Alert" success/>))
.add('standard info', withReadme(AlertReadme, () => <Alert appLevel message="Alert" info/>))
.add('standard warning', withReadme(AlertReadme, () => <Alert appLevel message="Alert" warning/>))
.add('standard error', withReadme(AlertReadme, () => <Alert appLevel message="Alert" error/>))
