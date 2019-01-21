import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import ProgressBar from './ProgressBar'
import Readme from './progressbar.md'
storiesOf('Progress bar', module)
  .add('simple', withReadme(Readme,  () => (
    <ProgressBar max={100} value={50} />
  )))
  .add('title', withReadme(Readme,  () => (
    <ProgressBar max={100} value={75} title="Progress bar"/>
  )))
  .add('danger', withReadme(Readme,  () => (
    <ProgressBar danger max={100} value={75} title="Progress bar"/>
  )))
  .add('success', withReadme(Readme,  () => (
    <ProgressBar success max={100} value={75} title="Progress bar"/>
  )))
