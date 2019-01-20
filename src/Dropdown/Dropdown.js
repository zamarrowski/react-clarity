import React from 'react'
import styled, { css } from 'styled-components'
import Button from './../Button/Button'

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownContainer = styled.div`
  display: flex;
  font-family: 'MetropolisRegular';
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 5rem;
  max-width: 15rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: .125rem;
  box-shadow: 0 1px 0.125rem rgba(115,115,115,.25);
  margin-top: .083333rem;
  padding: .5rem 0;
  z-index: 1000;
  visibility: hidden;

  ${props => props.show && css`
    visibility: visible;
  `};
`

const DropdownHeader = styled.h4`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: normal;
  padding: 0 .5rem;
  line-height: .75rem;
  margin: 0;
  color: #313131;
  white-space: nowrap;
  margin-bottom: 5px;
`

const DropdownButton = styled.button`
  font-size: 14px;
  letter-spacing: normal;
  font-weight: 400;
  background: 0 0;
  border: 0;
  color: #565656;
  cursor: pointer;
  display: block;
  height: auto;
  line-height: inherit;
  margin: 0;
  width: 100%;
  text-transform: none;
  padding: .125rem 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  border-radius: 0;
  white-space: nowrap;
  
  &:hover {
    background-color: #eee;
    color: #565656;
    text-decoration: none;
  };

  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: .4;
    &:hover {
      background: 0 0;
    };
  `};
`

class DropdownComponent extends React.Component {
  state = {
    open: false
  }

  render() {
    return(
      <Dropdown>
        <Button onClick={this._handleClick.bind(this)} solid>DROPDOWN</Button>
        <DropdownContainer show={this.state.open}>
          {this.props.headerName ? <DropdownHeader>{this.props.headerName}</DropdownHeader> : ''}
          {this.props.actions && this.props.actions.map((action, key) => (
            <DropdownButton onClick={this._onClickDropdownButton.bind(this, action.onClick || null)} disabled={action.disabled} key={key}>{action.name}</DropdownButton>
          ))}
        </DropdownContainer>
      </Dropdown>
    )
  }

  _handleClick() {
    this.setState({ open: !this.state.open })
  }

  _onClickDropdownButton(cb) {
    this.setState({ open: !this.state.open }, () => {
      if (cb) cb()
    })
  }
}

export default DropdownComponent
  
  