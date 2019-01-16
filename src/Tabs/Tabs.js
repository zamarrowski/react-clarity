import React from 'react'
import styled, { css } from 'styled-components'

const TabContainer = styled.div`
  box-sizing: inherit;
`

const TabButtonContainer = styled.ul`
    display: flex;
    height: 50px;
    list-style-type: none;
    align-items: center;
    box-shadow: 0 -1px 0 #ccc inset;
    margin: 0;
    width: 100%;
    white-space: nowrap;
    padding-left: 0px;
`

const TabButton = styled.button`
  margin-right: 1rem;
  color: #000;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: normal;
  display: inline-block;
  color: #737373;
  padding: 0 .125rem;
  border: none;
  box-shadow: none;
  line-height: 1.5rem;
  cursor: pointer;
  -webkit-appearance: none!important;
  min-width: 3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  height: 48px;
  &:hover {
    box-shadow: 0 -3px 0 #0079b8 inset;
    transition: box-shadow .2s ease-in;
  };

  ${props => props.active && css`
    box-shadow: 0 -3px 0 #0079b8 inset;
    transition: box-shadow .2s ease-in;
  `}

`

const TabContent = styled.section`
  max-width: 900px;
  display: block;
  box-sizing: inherit;
  margin-top: 15px;
`

class Tabs extends React.Component {

  state = {
    tabSelected: 0
  }

  render() {
    return(
      <TabContainer>
        <TabButtonContainer>
          {this.props.tabs.map((tab, key) => (
              <TabButton active={this.state.tabSelected === key} 
                onClick={() => this.setState({ tabSelected: key })} 
                key={key}
              >
                {tab.name}
              </TabButton>
          ))}
        </TabButtonContainer>
        {this.props.tabs.map((tab, key) => (
          <div>
            {this.state.tabSelected === key ? (
              <TabContent key={key}>{tab.content}</TabContent>
            ) : ''}
          </div>
        ))}
      </TabContainer>
    )
  }
}

export default Tabs