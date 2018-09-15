import React from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div`
  box-shadow: 0 0.125rem 0 0 #d7d7d7;
  border-radius: .125rem;
  border: 1px solid #d7d7d7;
  position: relative;
  display: block;
  background-color: #fff;
  width: 100%;
`

const CardTitle = styled.div`
  border-bottom: 1px solid #eee;
  color: #000;
  font-size: 18px;
  font-weight: 200;
  letter-spacing: normal;
  padding: 15px 25px;
`

const CardBlock = styled.div`
      border-bottom: 1px solid #eee;
      padding: 15px 25px;
`

const CardFooter = styled.div`
  padding: 15px 25px;
`

const CardImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
`

export default props => 
  <Card {...props}>
    <CardTitle>{props.title}</CardTitle>
    {props.image ? <CardImage src={props.image}/> : ''}
    <CardBlock>
      {props.children}
    </CardBlock>
    {props.actions ? <CardFooter>{props.actions}</CardFooter> : '' }
  </Card>
