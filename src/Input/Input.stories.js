import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Input from './Input'
import Readme from './input.md'

storiesOf('Input', module)
  .add('simple', withReadme(Readme, () => <Input />))
  .add('with label', withReadme(Readme, () => <Input label="Name" />))
