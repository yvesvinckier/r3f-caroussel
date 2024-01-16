import React from "react";
import styled from "@emotion/styled";

import NavLogo from "../general/NavLogo";
import NavAbout from "../general/NavAbout";

const StyledNavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  padding: 30px 60px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Navigation = () => {
  return (
    <StyledNavigationContainer>
      <NavLogo />
      <NavAbout />
    </StyledNavigationContainer>
  );
};

export default Navigation;
