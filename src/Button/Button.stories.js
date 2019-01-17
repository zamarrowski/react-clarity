import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import Readme from './button.md'
import Button from './Button'


storiesOf('Buttons outline', module)
  .add('regular',  withReadme(Readme, () => <Button>My button</Button>))
  .add('success',  withReadme(Readme, () => <Button success>My button</Button>))
  .add('warning',  withReadme(Readme, () => <Button warning>My button</Button>))
  .add('disabled',  withReadme(Readme, () => <Button disabled>My button</Button>))

  storiesOf('Buttons solid', module)
  .add('regular',  withReadme(Readme, () => <Button solid>My button</Button>))
  .add('success',  withReadme(Readme, () => <Button solid success>My button</Button>))
  .add('warning',  withReadme(Readme, () => <Button solid warning>My button</Button>))
  .add('disabled',  withReadme(Readme, () => <Button solid disabled>My button</Button>))
