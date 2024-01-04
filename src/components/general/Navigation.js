import React from "react";
import styled from "@emotion/styled";

import NavLogo from "../general/NavLogo";
import NavAbout from "../general/NavAbout";

const StyledNavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  padding: 0 60px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
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
