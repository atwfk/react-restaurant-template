import React from "react";
import styled from "styled-components";
import offer from "../../../assets/images/offer.png";

const BrandImages = ({ isOpen }) => {
  return (
    <StyledBrandImages>
      <div className="offer-images">
        <img className="offer" src={offer} alt="offer" />
      </div>
      <div className={`offer-price ${isOpen ? "hide" : null}`}>
        <div className="price">
          <p>
            $5<span>.49</span>
          </p>
          <h3>ONLY</h3>
        </div>
      </div>
    </StyledBrandImages>
  );
};

const StyledBrandImages = styled.div`
  .offer-images {
    img {
      width: 700px;
      @media (max-width: 1170px) {
        width: 500px;
      }
    }
  }
  .offer-price {
    border-radius: 50%;
    background-color: #d51b1b;
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 550px;
    @media (max-width: 1170px) {
      right: 50px;
      bottom: 120px;
    }
    @media (max-width: 575px) {
      bottom: 50px;
    }
    .price {
      border-radius: 50%;
      border: 2px dashed #fff;
      width: 150px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 55px;
        color: #fff;
        font-weight: bold;
        span {
          font-size: 20px;
        }
      }
      h3 {
        letter-spacing: 10px;
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .hide {
    display: none;
  }
`;

export default BrandImages;
