import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text } from '@storybook/addon-knobs'

import Readme from './button.md'
import Button from './Button'


storiesOf('Buttons outline', module)
  .addDecorator(withKnobs)
  .add('regular',  withReadme(Readme, () => <Button>{text('Label', 'My button')}</Button>))
  .add('success',  withReadme(Readme, () => <Button success>{text('Label', 'My button')}</Button>))
  .add('warning',  withReadme(Readme, () => <Button warning>{text('Label', 'My button')}</Button>))
  .add('disabled',  withReadme(Readme, () => <Button disabled>{text('Label', 'My button')}</Button>))

  storiesOf('Buttons solid', module)
  .add('regular',  withReadme(Readme, () => <Button solid>{text('Label', 'My button')}</Button>))
  .add('success',  withReadme(Readme, () => <Button solid success>{text('Label', 'My button')}</Button>))
  .add('warning',  withReadme(Readme, () => <Button solid warning>{text('Label', 'My button')}</Button>))
  .add('disabled',  withReadme(Readme, () => <Button solid disabled>{text('Label', 'My button')}</Button>))
