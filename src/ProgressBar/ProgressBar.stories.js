import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, number, text } from '@storybook/addon-knobs'

import ProgressBar from './ProgressBar'
import Readme from './progressbar.md'

storiesOf('Progress bar', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme,  () => (
    <ProgressBar max={number('Max', 100)} value={number('Value', 50)} />
  )))
  .add('title', withReadme(Readme,  () => (
    <ProgressBar max={number('Max', 100)} value={number('Value', 75)} title={text('Title', 'Progress bar')}/>
  )))
  .add('danger', withReadme(Readme,  () => (
    <ProgressBar danger max={number('Max', 100)} value={number('Value', 75)} title={text('Title', 'Progress bar')}/>
  )))
  .add('success', withReadme(Readme,  () => (
    <ProgressBar success max={number('Max', 100)} value={number('Value', 75)} title={text('Title', 'Progress bar')}/>
  )))
