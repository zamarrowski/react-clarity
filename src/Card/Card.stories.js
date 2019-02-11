import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text } from '@storybook/addon-knobs'

import Card from './Card'
import Button from './../Button/Button'
import Readme from './card.md'


storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme, () => <Card title={text('Title', 'My card')}>{text('Content', 'Content card')}</Card>))
  .add('with actions', withReadme(Readme, () => <Card title={text('Title', 'My card')} actions={<Button>Button</Button>}>Content card</Card>))
  .add('with image', withReadme(Readme, () => <Card image={text('Image', 'https://vmware.github.io/clarity/assets/images/documentation/cards/placeholder_350x150.png')} title="My card" actions={<Button>Button</Button>}>Content card</Card>))
