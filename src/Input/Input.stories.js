import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text } from '@storybook/addon-knobs'
import Input from './Input'
import Readme from './input.md'

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme, () => <Input />))
  .add('with label', withReadme(Readme, () => <Input label={text('Label', 'Name')} />))
