import React from 'react'
import styled, { css } from 'styled-components'

const Label = styled.span`
  font-weight: 400;
  letter-spacing: .03em;
  line-height: .458333rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  border-radius: 50px;
  border: 1px solid #737373;
  height: .875rem;
  margin: 0 .25rem 0 0;
  white-space: nowrap;
  color: #565656;
  font-family: 'MetropolisRegular';

  ${props => props.purple && css`
    border: 1px solid #9b56bb;
  `};

  ${props => props.blue && css`
    border: 1px solid #004a70;
  `};

  ${props => props.orange && css`
    border: 1px solid #ff8400;
  `};

  ${props => props.lightBlue && css`
    border: 1px solid #89cbdf;
  `};

  ${props => props.info && css`
    background: #e1f1f6;
    color: #004a70;
    border: 1px solid #49afd9;
  `};

  ${props => props.success && css`
    background: #dff0d0;
    color: #266900;
    border: 1px solid #60b515;
  `};

  ${props => props.warning && css`
    background: #fef3b5;
    color: #313131;
    border: 1px solid #fdcf08;
  `};

  ${props => props.error && css`
    background: #f5dbd9;
    color: #a32100;
    border: 1px solid #ebafa6;
  `};
  
`

export default props =>
  <Label {...props}>{props.children}</Label>
