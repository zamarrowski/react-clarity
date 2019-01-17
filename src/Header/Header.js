import React from 'react'
import styled, { css } from 'styled-components'

const Header = styled.header`
  margin-bottom: 24px;
  background-color: #002538;
  flex: 0 0 60px;
  display: flex;
  color: #fafafa;
  height: 60px;
  white-space: nowrap;
  font-family: 'MetropolisRegular';
`

const HeaderBranding = styled.div`
  height: 60px;
  display: flex;
  flex: 0 0 auto;
  min-width: 120px;
  padding: 0 25px;
  color: #fafafa;
  white-space: nowrap;
`;

const HeaderTitle = styled.a`
  display: inline-flex;
  align-items: center;
  height: 60px;
  text-decoration: none;
  color: #fafafa;
  padding-right: 15px;
`

const HeaderNav = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 60px;
  color: #fafafa;
  white-space: nowrap;
`

const NavLink = styled.a`
  opacity: 1;
  line-height: 60px;
  display: inline-block;
  color: #fafafa;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  opacity: .65;

  &:hover {
    opacity: 1;
  };

  ${props => props.active && css`
    background: rgba(255,255,255,.15);
  `};
`

export default props => 
  <Header>
    <HeaderBranding>
      <HeaderTitle href="/">{props.title}</HeaderTitle>
      <HeaderNav>
        {props.navLinks && props.navLinks.map((navLink, key) => (
          <NavLink active={navLink.active} href={navLink.link} key={key}>{navLink.text}</NavLink>
        ))}
      </HeaderNav>
    </HeaderBranding>
  </Header>
