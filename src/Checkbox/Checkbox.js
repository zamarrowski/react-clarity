import React from 'react'
import styled from 'styled-components'

const LabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: 'MetropolisRegular';

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  };
`

const InputCheckbox = styled.input`
  &:checked + span {
    background-color: #0079b8;
  };

  &:checked + span:after {
    display: block;
  }
`

const SpanCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: #eee;
  border: 1px solid #9a9a9a;
  border-radius: .125rem;

  &:hover {
    background-color: #ccc;
  };

  &:after {
    content: "";
    position: absolute;
    display: none;
  };

  &:after {
    left: 5px;
    top: 3px;
    width: 2px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  };
`


export default props => 
  <LabelContainer>
    {props.label}
    <InputCheckbox {...props} onChange={(e) => props.onCheck(e.target.checked)} type="checkbox" />
    <SpanCheckmark />
  </LabelContainer>
