import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`

const Spinner = styled.div`
  height: 70px;
  width: 70px;
  border: 5px solid #E4E4E4;
  border-bottom-color: #258CC1;
  border-radius: 50%;
  animation-name: ${rotate};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export default props => 
  <Spinner/>
