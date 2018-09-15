import React from 'react'
import styled, { css } from 'styled-components'
import Ionicon from 'react-ionicons'

const Alert = styled.div`
  padding: .333333rem calc(.5rem - 1px);
  color: #565656;
  text-align: left;
  
  ${props => props.standard && css`
    border-width: 1px;
    border-style: solid;
    border-radius: 0.125rem;
  `};

  ${props => props.appLevel && css`
    color: #fff;
    border: 0;
  `}

  ${props => props.standard && props.success && css`
    border-color: #60b515;
    background-color: #dff0d0;
  `};

  ${props => props.standard && props.info && css`
    border-color: #49afd9;
    background-color: #e1f1f6;
  `};

  ${props => props.standard && props.warning && css`
    border-color: #ffdc0b;
    background-color: #feecb5;
  `};

  ${props => props.standard && props.error && css`
    border-color: #ebafa6;
    background-color: #f5dbd9;
  `};

  ${props => props.appLevel && props.success && css`
    background-color: #62a420;
  `};

  ${props => props.appLevel && props.info && css`
    background-color: #0079b8;
  `};

  ${props => props.appLevel && props.warning && css`
    background-color: #c25400;
  `};

  ${props => props.appLevel && props.error && css`
    background-color: #c92100;
  `};

`;

const getIconName = props => {
  if (props.success) return 'ios-checkmark-circle-outline'
  if (props.info) return 'ios-information-circle-outline'
  if (props.warning) return 'ios-warning-outline'
  if (props.error) return 'ios-warning'
}

const getColor = props => {
  if (props.standard) {
    if (props.success) return '#318700'
    if (props.info) return '#0079b8'
    if (props.warning) return '#565656'
    if (props.error) return '#c92100'
  }
  return '#fff'
}

const getIcon = props => <Ionicon style={{verticalAlign: 'bottom', marginRight: '5px'}} icon={getIconName(props)} color={getColor(props)} />

export default props => 
  <Alert {...props}>
    {getIcon(props)}
    {props.message}
  </Alert>
