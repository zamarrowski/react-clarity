import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Password from './Password'
import Readme from './password.md'

const Wrap = (input) => () => <div style={{ maxWidth: "300px" }}>{input}</div>

storiesOf('Password', module)
  .add('simple', withReadme(Readme, Wrap(<Password />)))
