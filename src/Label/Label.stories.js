import React from 'react'

import { storiesOf } from '@storybook/react'

import Label from './Label'


storiesOf('Label', module)
  .add('simple', () => <Label>Austin</Label>)
  .add('purple', () => <Label purple>Austin</Label>)
  .add('blue', () => <Label blue>Austin</Label>)
  .add('orange', () => <Label orange>Austin</Label>)
  .add('lightBlue', () => <Label lightBlue>Austin</Label>)
  .add('info', () => <Label info>Austin</Label>)
  .add('success', () => <Label success>Austin</Label>)
  .add('warning', () => <Label warning>Austin</Label>)
  .add('error', () => <Label error>Austin</Label>)
