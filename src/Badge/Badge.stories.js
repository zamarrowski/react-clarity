import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text } from '@storybook/addon-knobs'

import Badge from './Badge'
import Readme from './Badge.md'


storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('success', withReadme(Readme, () => <Badge text={text('Number', '94')} success/>))
  .add('info', withReadme(Readme, () => <Badge text={text('Number', '10')} info/>))
  .add('warning', withReadme(Readme, () => <Badge text={text('Number', '333')} format="true" warning/>))
  .add('danger', withReadme(Readme, () => <Badge text={text('Number', '15')} danger/>))
