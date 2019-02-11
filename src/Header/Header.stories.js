import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, object, text } from '@storybook/addon-knobs'
import Header from './Header'
import Readme from './header.md'

const links = [{text: 'Dashboard', link: '/', active: true}, {text: 'Interactive Analytics', link: '/ie'}]

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme, () => <Header title={text('Header', 'My header')} />))
  .add('with buttons', withReadme(Readme, () => <Header title={text('Header', 'My header')} navLinks={object('Links', links)}/>))
