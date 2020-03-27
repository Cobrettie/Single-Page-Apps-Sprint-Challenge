import React from "react";
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: #333333;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <StyledH1 className="ui center">Rick &amp; Morty Fan Page</StyledH1>
    </header>
  );
}
