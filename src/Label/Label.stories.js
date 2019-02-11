import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text } from '@storybook/addon-knobs'

import Readme from './label.md'
import Label from './Label'


storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme, () => <Label>{text('Label', 'Austin')}</Label>))
  .add('purple', withReadme(Readme, () => <Label purple>{text('Label', 'Austin')}</Label>))
  .add('blue', withReadme(Readme, () => <Label blue>{text('Label', 'Austin')}</Label>))
  .add('orange', withReadme(Readme, () => <Label orange>{text('Label', 'Austin')}</Label>))
  .add('lightBlue', withReadme(Readme, () => <Label lightBlue>{text('Label', 'Austin')}</Label>))
  .add('info', withReadme(Readme, () => <Label info>{text('Label', 'Austin')}</Label>))
  .add('success', withReadme(Readme, () => <Label success>{text('Label', 'Austin')}</Label>))
  .add('warning', withReadme(Readme, () => <Label warning>{text('Label', 'Austin')}</Label>))
  .add('error', withReadme(Readme, () => <Label error>{text('Label', 'Austin')}</Label>))
