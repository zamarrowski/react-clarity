import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import Badge from './Badge'
import Readme from './Badge.md'


storiesOf('Badges', module)
  .add('success', withReadme(Readme, () => <Badge text="94" success/>))
  .add('info', withReadme(Readme, () => <Badge text="10" info/>))
  .add('warning', withReadme(Readme, () => <Badge text="333" format="true" warning/>))
  .add('danger', withReadme(Readme, () => <Badge text="5" danger/>))
