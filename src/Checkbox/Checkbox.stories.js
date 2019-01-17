import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import Checkbox from './Checkbox'
import Readme from './checkbox.md'

storiesOf('Checkbox', module)
  .add('with text', withReadme(Readme, () => <Checkbox label="My checkbox"/>))
  .add('with checked', withReadme(Readme, () => <Checkbox label="My checkbox" checked/>))
  .add('with onCheck ', withReadme(Readme, () => <Checkbox onCheck={(value) => console.log(value)} label="My checkbox"/>))
