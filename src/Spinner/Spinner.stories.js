import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Readme from './spinner.md'
import Spinner from './Spinner'


storiesOf('Spinner', module)
  .add('simple', withReadme(Readme, () => <Spinner/>))
