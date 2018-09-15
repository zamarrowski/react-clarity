import React from 'react'
import styled, { css } from 'styled-components'

const Badge = styled.span`
  vertical-align: middle;
  justify-content: center;
  line-height: normal;
  border-radius: 50%;
  padding: 8px 11px;
  white-space: nowrap;
  text-align: center;

  ${props => {
    if (props.children.length > 1) {
      return css`
        padding: 8px 8px;
      `
    }
  }};

  ${props => props.success && css`
    background: #318700;
    color: #fff;
  `};

  ${props => props.info && css`
    background: #0079b8;
    color: #fff;
  `};

  ${props => props.warning && css`
    background: #ffdc0b;
    color: #000;
  `};

  ${props => props.danger && css`
    background: #c92100;
    color: #fff;
  `};

`

const format = text => {
  const number = Number(text)
  if (number > 99) return '99+'
}

export default props => 
  <Badge {...props}>{props.format ? format(props.text) : props.text}</Badge>
