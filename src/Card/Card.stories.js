import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'

import Card from './Card'
import Button from './../Button/Button'
import Readme from './card.md'


storiesOf('Card', module)
  .add('simple', withReadme(Readme, () => <Card title="My card">Content card</Card>))
  .add('with actions', withReadme(Readme, () => <Card title="My card" actions={<Button>Button</Button>}>Content card</Card>))
  .add('with image', withReadme(Readme, () => <Card image="https://vmware.github.io/clarity/assets/images/documentation/cards/placeholder_350x150.png" title="My card" actions={<Button>Button</Button>}>Content card</Card>))
