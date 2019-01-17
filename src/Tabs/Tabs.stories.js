import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Readme from './tabs.md'
import Tabs from './Tabs'

storiesOf('Tabs', module)
  .add('simple', withReadme(Readme, () => (
    <Tabs tabs={[
      {
        name: 'tab1',
        content: 'tab1 content'
      }, 
      {
        name: 'tab2',
        content: 'tab2 content'
      }
    ]} />
  )))
