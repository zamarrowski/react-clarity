import React from 'react'
import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text } from '@storybook/addon-knobs'
import Input from './Input'
import Readme from './input.md'

const Wrap = (input) => () => <div style={{ maxWidth: "300px" }}>{input}</div>

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme, Wrap(<Input />)))
  .add('with label', withReadme(Readme, Wrap(<Input label={text('Label', 'Name')} />)))
  .add('with icon', withReadme(Readme, Wrap(
    <Input icon={"ios-eye-outline"} onIconClick={() => alert("onIconClick cb!")} />)
  ))
