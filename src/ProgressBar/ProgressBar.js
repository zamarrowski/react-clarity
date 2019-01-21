import React from 'react'
import styled, { css } from 'styled-components'

const ProgressBarTitle = styled.h4`
  color: #000;
  font-weight: 200;
  font-family: "MetropolisRegular","Avenir Next","Helvetica Neue",Arial,sans-serif;
  font-size: .75rem;
  letter-spacing: normal;
  line-height: 1rem;
  margin-bottom: 0;
  font-size: 16px;
`

const ProgressContainer = styled.div`
  background-color: transparent;
  border-radius: 0;
  font-size: inherit;
  height: 2em;
  margin: 0;
  max-height: .583333rem;
  min-height: .166667rem;
  overflow: hidden;
  display: block;
  width: 100%;
`

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  display: block;
  background-color: #eee;
  border: none;
  color: #0079b8;
  height: 100%;
  width: 100%;
  &::-webkit-progress-value {
    background: #0079b8;
  };

  ${props => props.danger && css`
    &::-webkit-progress-value {
      background: #c92100;
    };
  `};

  ${props => props.success && css`
    &::-webkit-progress-value {
      background: #60b515;
    };
  `};
`

export default props => 
  <div>
    {props.title ? <ProgressBarTitle>{props.title}</ProgressBarTitle> : ''}
    <ProgressContainer>
      <ProgressBar danger={props.danger} success={props.success} max={props.max} value={props.value} />
    </ProgressContainer>
  </div>
