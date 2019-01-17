import React from 'react'
import styled, { css } from 'styled-components'

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1050;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: 'MetropolisRegular';

  ${props => {
    if (props.show) {
      window.scrollTo(0, 0)
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'inherit'
    }
  }};

  ${props => props.show && css`
    display: flex;
  `};

`

const ModalDialog = styled.div`
  position: relative;
  z-index: 1050;
  width: 600px;
  max-width: 100%;
`

const ModalBackDrop = styled.div`
  position: absolute;
  background-color: #313131;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: .85;
  z-index: 1040;
`

const ModalContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px 2px rgba(0,0,0,.2);
`

const ModalHeader = styled.div`
  border-bottom: none;
  padding: 0 0 20px;
`

const ModalBody = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default props => 
  <Modal {...props}>
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          {props.title}
        </ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          {props.actions}
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
    <ModalBackDrop/>
  </Modal>
