import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Ionicon from 'react-ionicons'

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  min-width: 2.5rem;
  height: 35px;
  border-bottom: 1px solid #9a9a9a;
  background: linear-gradient(to bottom,transparent 95%,#0094d2 95%) no-repeat;
  background-size: 0 100%;
  transition: background-size .2s ease;
  transition-property: background-size;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  font-size: inherit;
  margin-bottom: 10px;
  outline: 0;
  
  ${props => props.error && css`
    border-bottom-color: #c92100;
    background: linear-gradient(to bottom,transparent 95%,#c92100 95%) no-repeat;
    background-size: 0 100%;
    transition: background-size .2s ease;
  `};

  ${props => props.success && css`
    border-bottom-color: #318700;
    background: linear-gradient(to bottom,transparent 95%,#318700 95%) no-repeat;
    background-size: 0 100%;
    transition: background-size .2s ease;
  `};
  
  ${props => props.focus && css`
    border-bottom: 1px solid ${props => props.success ? "#318700" : "#0094d2"};
    background-size: 100% 100%;
  `}
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  display: inline-block;
  margin: 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background: 0 0;
  width: calc(100% - 64px);
  height: 100%;
  color: #000;
  outline: none;
`

const Label = styled.label`
  display: block;
  color: #444;
  font-weight: 600;
  line-height: .75rem;
  font-family: 'MetropolisRegular';
`

const Icon = styled(Ionicon)`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  margin: 0 1rem;
`

export default (props) => {
  const { label, icon, onIconClick, onFocus, onBlur } = props
  const [inFocus, setFocus] = useState(false)

  const handleOnFocus = (e) => setFocus(
    true,
    onFocus != null ? () => onFocus(e) : Function.prototype
  )
  const handleOnBlur = (e) => setFocus(
    false,
    onBlur != null ? () => onBlur(e) : Function.prototype
  )

  return (
    <Wrapper {...props} focus={inFocus}>
      {label && <Label>{label}</Label>}
      <Input onFocus={handleOnFocus} onBlur={handleOnBlur} {...props} />
      {icon && <Icon color="#0095d3" icon={icon} onClick={onIconClick} />}
    </Wrapper>
  )
}

