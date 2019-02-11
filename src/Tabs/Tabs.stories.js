import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, object } from '@storybook/addon-knobs'

import Readme from './tabs.md'
import Tabs from './Tabs'

const tabs = [
  {
    name: 'tab1',
    content: 'tab1 content'
  }, 
  {
    name: 'tab2',
    content: 'tab2 content'
  }
]

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme, () => (
    <Tabs tabs={object('Tabs', tabs)} />
  )))
