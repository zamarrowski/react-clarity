import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Modal from './Modal'
import Button from './../Button/Button'
import Readme from './modal.md'
storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('simple', withReadme(Readme,  () => (
    <Modal title={text('Title', 'Modal')} show={boolean('Show modal', true)} actions={
      <Button>{text('Button text', 'Close modal')}</Button>
    }>
      <h3>Form</h3>
    </Modal>
  )))
