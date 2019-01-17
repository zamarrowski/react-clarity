import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Readme from './label.md'
import Label from './Label'


storiesOf('Label', module)
  .add('simple', withReadme(Readme, () => <Label>Austin</Label>))
  .add('purple', withReadme(Readme, () => <Label purple>Austin</Label>))
  .add('blue', withReadme(Readme, () => <Label blue>Austin</Label>))
  .add('orange', withReadme(Readme, () => <Label orange>Austin</Label>))
  .add('lightBlue', withReadme(Readme, () => <Label lightBlue>Austin</Label>))
  .add('info', withReadme(Readme, () => <Label info>Austin</Label>))
  .add('success', withReadme(Readme, () => <Label success>Austin</Label>))
  .add('warning', withReadme(Readme, () => <Label warning>Austin</Label>))
  .add('error', withReadme(Readme, () => <Label error>Austin</Label>))
