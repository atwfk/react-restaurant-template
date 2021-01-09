import React, { useState } from "react";
import styled from "styled-components";
import BrandImages from "./BrandImages/BrandImages";
import BrandOffer from "./BrandOffer/BrandOffer";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <StyledLandingPage>
        <BrandOffer />
        <BrandImages isOpen={isOpen} />
      </StyledLandingPage>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  overflow: hidden;
  background-color: #ffc045;
  height: 100vh;
  padding: 30px 70px;
  @media (max-width: 575px) {
    padding: 30px 20px;
    height: 120vh;
  }
`;

const StyledLandingPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default LandingPage;
