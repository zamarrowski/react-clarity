import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import Dropdown from './Dropdown'
import Readme from './dropdown.md'

const actions = [
  {
    name: 'Action',
  },
  {
    name: 'Disabled Link',
    disabled: true
  }
]

storiesOf('Dropdown', module)
  .add('with text', withReadme(Readme, () => 
    <Dropdown 
      headerName="Actions"
      actions={actions}
    />))
