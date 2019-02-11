import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Alert from './Alert'
import { withReadme } from 'storybook-readme'
import AlertReadme from './AlertReadme.md'


storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('standard success', withReadme(AlertReadme, () => <Alert standard message={text('Label', 'Alert')} success/>))
  .add('standard info', withReadme(AlertReadme, () => <Alert standard message={text('Label', 'Alert')} info/>))
  .add('standard warning', withReadme(AlertReadme, () => <Alert standard message={text('Label', 'Alert')} warning/>))
  .add('standard error', withReadme(AlertReadme, () => <Alert standard message={text('Label', 'Alert')} error/>))


storiesOf('Alert app level', module)
.add('standard success', withReadme(AlertReadme, () => <Alert appLevel message={text('Label', 'Alert')} success/>))
.add('standard info', withReadme(AlertReadme, () => <Alert appLevel message={text('Label', 'Alert')} info/>))
.add('standard warning', withReadme(AlertReadme, () => <Alert appLevel message={text('Label', 'Alert')} warning/>))
.add('standard error', withReadme(AlertReadme, () => <Alert appLevel message={text('Label', 'Alert')} error/>))
