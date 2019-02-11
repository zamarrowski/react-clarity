import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, object, text } from '@storybook/addon-knobs'

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
  .addDecorator(withKnobs)
  .add('with text', withReadme(Readme, () => 
    <Dropdown 
      headerName={text('Header name', "Actions")}
      actions={object('Actions', actions)}
    />))
