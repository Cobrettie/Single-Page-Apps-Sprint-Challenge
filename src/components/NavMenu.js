import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../Breakpoints';
 
const StyledNav = styled.nav`
  border-bottom: 2px solid #373737;
  padding: 20px 0 30px;
  margin: 0 auto 40px;
  text-align: right;

  @media ${device.ancient} {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  @media ${device.mobileL} {
    text-align: center;
    padding: 20px 0 30px;
  }

  @media ${device.tablet} {
    display: block;
    text-align: right;
    padding: 30px 0 30px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  background: #ABD5EC;
  border: 1px solid #333333;
  border-radius: 50px;
  padding: 5px 20px;
  font-size: 22px;
  margin: 0 20px;

  @media ${device.ancient} {
    margin: 10px auto;
  }

  @media ${device.mobileL} {
    margin: 10px auto;
    width: 40%;
  }

  @media ${device.tablet} {
    margin: 10px 20px;
  }
`;

export default function NavMenu() {
  return (
    <StyledNav>
      <StyledNavLink to='/'>Home</StyledNavLink>
      <StyledNavLink to='/characterlist'>Characters</StyledNavLink>
      <StyledNavLink to ='/episodelist'>Episodes</StyledNavLink>
    </StyledNav>
  )
}