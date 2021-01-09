import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTruck } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isOpen, setIsOpen }) => {
  const [navLinks] = useState(["HOME", "MENUE", "OUR STORY", "CONTACT US"]);
  return (
    <nav>
      <StyledHead>
        <div className="logo">
          <FontAwesomeIcon icon={faHamburger} size="3x" />
          <h3>BURGER HOUSE</h3>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faTruck} size="2x" />
          <p>Express Delivery +1 234 567 890</p>
        </div>
        <div
          className={`toggle-btn ${isOpen ? "toggle-open" : null}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </StyledHead>
      <StyledLinks>
        <ul className={`${isOpen ? "open" : null}`}>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <a>{navLink}</a>
            </li>
          ))}
        </ul>
      </StyledLinks>
    </nav>
  );
};

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 20px;
    }
  }
  .phone {
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
    }
    @media (max-width: 778px) {
      display: none;
    }
  }
  .toggle-btn {
    align-self: center;
    display: none;
    justify-content: space-around;
    flex-direction: column;
    border-radius: 5.4px;
    border: 1px solid #3d2514;
    padding: 2px;
    cursor: pointer;
    height: 30px;
    div {
      transition: all 0.5s ease;
      background-color: #3d2514;
      width: 30px;
      height: 2px;
    }
    @media (max-width: 778px) {
      display: flex;
    }
  }
  .toggle-open {
    div {
      transition: all 0.5s ease;
      &:last-child {
        transform: rotate(40deg);
        position: relative;
        top: -8px;
      }
      &:first-child {
        transform: rotate(-40deg);
        position: relative;
        bottom: -8px;
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  overflow: hidden;
  @media (max-width: 778px) {
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    transition: all 0.4s ease;
    @media (max-width: 778px) {
      flex-direction: column;
      height: 0;
      justify-content: space-between;
      align-items: center;
    }
    li {
      :not(:last-of-type) {
        margin-right: 30px;
        @media (max-width: 778px) {
          margin: 0;
        }
      }
      letter-spacing: 3px;
      font-size: 18px;
    }
  }
  .open {
    height: 80vh;
  }
`;

export default Navbar;
