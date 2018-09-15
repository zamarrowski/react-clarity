import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  -webkit-appearance: none !important;
  border: 1px solid #0079b8;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 500;
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid #0079b8;
  color: #0079b8;
  border-radius: 3px;
  
  &:hover {
    background-color: #e1f1f6;
    color: #004a70;
  };

  &:active {
    box-shadow: 0 2px 0 0 #0094d2 inset;
  };

   ${props => props.disabled && css`
    color: #565656;
    cursor: not-allowed;
    background-color: transparent;
    border-color: #ccc;
    opacity: .4;
    &:hover {
      color: #565656;
      background-color: transparent;
      border-color: #ccc;
      opacity: .4;
    };
  `};

  ${props => props.warning && css`
    border-color: #c92100;
    background-color: transparent;
    color: #e62700;

    &:hover {
      background-color: #f5dbd9;
      color: #a32100;
    };

    &:active {
      box-shadow: 0 2px 0 0 #ebafa6 inset;
    };
    
  `};

  ${props => props.success && css`
    border-color: #308300;
    background-color: transparent;
    color: #308300;

    &:hover {
      background-color: #dff0d0;
      color: #1d5100;
    };

    &:active {
      box-shadow: 0 2px 0 0 #1d5100 inset;
    };
  `};

  ${props => props.solid && css`
    border-color: #0079b8;
    background-color: #0079b8;
    color: #fff;

    &:hover {
      background-color: #004a70;
      color: #e1f1f6;
    };

    &:active {
      box-shadow: 0 2px 0 0 #0094d2 inset;
    };

  `};

  ${props => props.solid && props.success && css`
    border-color: #318700;
    background-color: #318700;
    color: #fff;

    &:hover {
      background-color: #266900;
      color: #fff;
    };

    &:active {
      box-shadow: 0 2px 0 0 #1d5100 inset;
    };

  `};

  ${props => props.solid && props.warning && css`
    border-color: #e62700;
    background-color: #e62700;
    color: #fff;

    &:hover {
      background-color: #c92100;
      color: #fff;
    };

    &:active {
      box-shadow: 0 2px 0 0 #a32100 inset;
    };

  `};

  ${props => props.solid && props.disabled && css`
    color: #565656;
    cursor: not-allowed;
    background-color: #ccc;
    border-color: #ccc;
    opacity: .4;

    &:hover {
      color: #565656;
      background-color: #ccc;
      border-color: #ccc;
    };

  `};

  
`

export default props => <Button {...props}>{props.children}</Button>
