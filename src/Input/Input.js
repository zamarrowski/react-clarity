import React from 'react'
import styled, { css } from 'styled-components'

const Label = styled.label`
  display: block;
  color: #444;
  font-weight: 600;
  line-height: .75rem;
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  margin: 0;
  padding: 0 .25rem;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background: 0 0;
  height: 35px;
  color: #000;
  display: inline-block;
  min-width: 2.5rem;
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

  ${props => props.fullWidth && css`
    width: 100%;
  `};

  &:focus {
    border-bottom: 1px solid #0094d2;
    background-size: 100% 100%;
    outline: 0;
  };

  ${props => props.error && css`
    border-bottom-color: #c92100;
    background: linear-gradient(to bottom,transparent 95%,#c92100 95%) no-repeat;
    background-size: 0 100%;
    transition: background-size .2s ease;

    &:focus {
      border-bottom: 1px solid #c92100;
      background-size: 100% 100%;
    };

  `};

  ${props => props.success && css`
    border-bottom-color: #318700;
    background: linear-gradient(to bottom,transparent 95%,#318700 95%) no-repeat;
    background-size: 0 100%;
    transition: background-size .2s ease;

    &:focus {
      border-bottom: 1px solid #318700;
      background-size: 100% 100%;
    };

  `};

`

export default props => 
  <div>
    {props.label ? <Label>{props.label}</Label> : ''}
    <Input {...props} />
  </div>
