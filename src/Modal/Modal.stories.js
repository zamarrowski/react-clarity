import React from 'react'

import { storiesOf } from '@storybook/react'
import { withReadme } from 'storybook-readme'
import Modal from './Modal'
import Button from './../Button/Button'
import Readme from './modal.md'
storiesOf('Modal', module)
  .add('simple', withReadme(Readme,  () => (
    <Modal title="Modal" show={true} actions={
      <Button>Close modal</Button>
    }>
      <h3>Form</h3>
    </Modal>
  )))
