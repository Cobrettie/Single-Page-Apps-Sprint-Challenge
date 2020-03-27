import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border-bottom: 2px solid #373737;
  padding: 20px 0;
  margin: 0 auto 40px;
  // background: #333333;
  text-align: right;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  background: #ABD5EC;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 22px;
  margin: 0 20px;
`;

export default function NavMenu() {
  return (
    <StyledNav>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/characterlist'>Characters</StyledNavLink>
    </StyledNav>
  )
}