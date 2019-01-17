import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Header from './Header'
import Readme from './header.md'

storiesOf('Header', module)
  .add('simple', withReadme(Readme, () => <Header title="My Header" />))
  .add('with buttons', withReadme(Readme, () => <Header title="My Header" navLinks={[{text: 'Dashboard', link: '/', active: true}, {text: 'Interactive Analytics', link: '/ie'}]}/>))
