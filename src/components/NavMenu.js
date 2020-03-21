import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border-bottom: 2px solid #373737;
  padding: 20px 0;
  margin: 0 auto 40px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: dodgerblue;
  padding: 0 20px;
`;

export default function NavMenu() {
  return (
    <StyledNav>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='characterlist'>List of characters</StyledNavLink>
    </StyledNav>
  )
}