import React from 'react'
import styled from 'styled-components'

const Checkbox = styled.input`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  appearance: none;
`

export default props => 
  <div>
    <Checkbox type="checkbox" { ...props }/> <label>{props.label}</label>
  </div>
