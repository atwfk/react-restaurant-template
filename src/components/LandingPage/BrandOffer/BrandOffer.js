import React from "react";
import styled from "styled-components";

const BrandOffer = () => {
  return (
    <StyledBrandOffer>
      <span>It is a good time for the great taste of burgers</span>
      <h1>BURGER</h1>
      <h4>WEEk</h4>
    </StyledBrandOffer>
  );
};

const StyledBrandOffer = styled.div`
  @media (max-width: 575px) {
    margin-top: 50px;
  }
  span {
    font-size: 20px;
    padding: 10px;
    border: 2px dashed #3d2514;
    font-weight: lighter;
    @media (max-width: 850px) {
      padding: 0;
      border: none;
    }
  }
  h1 {
    margin: 10px 0 0 0;
    font-size: 150px;
    font-weight: bolder;
    text-shadow: 3px 3px 0px #fff;
    @media (max-width: 850px) {
      font-size: 100px;
    }
  }
  h4 {
    font-size: 100px;
    font-weight: bolder;
    text-shadow: 3px 3px 0px #fff;
    margin-top: -40px;
    @media (max-width: 850px) {
      font-size: 60px;
      margin-top: -10px;
    }
  }
`;

export default BrandOffer;
