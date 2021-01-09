import React, { useState } from "react";
import styled from "styled-components";
import menu1 from "../../assets/images/menu1.png";
import menu2 from "../../assets/images/menu2.png";
import menu3 from "../../assets/images/menu3.png";

const Menu = () => {
  const [menus] = useState([
    { src: menu1, title: "Most Popular Burger" },
    { src: menu2, title: "More fun more taste" },
    { src: menu3, title: "Fresh & Chili" },
  ]);
  return (
    <StyledMenu>
      <div className="menus">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="menu"
            style={{ backgroundImage: `url(${menu.src})` }}
          >
            <span>TRY IT TODAY</span>
            <h3>{menu.title}</h3>
          </div>
        ))}
      </div>
      <StyledAdButton>
        <h3>Always Tasty Burger</h3>
      </StyledAdButton>
    </StyledMenu>
  );
};

const StyledMenu = styled.section`
  padding: 100px 100px 0 100px;
  @media (max-width: 575px) {
    padding: 40px 40px 0 40px;
  }
  .menus {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(200px, auto);
    grid-gap: 20px;
    .menu {
      background-repeat: no-repeat;
      border-radius: 10px;
      background-size: cover;
      padding: 20px;
      @media (max-width: 1200px) {
        grid-column: 1 / 3;
      }
      :first-of-type {
        grid-row: 1 / 3;
      }
      span {
        color: #fff;
        font-size: 20px;
      }
      h3 {
        color: #fff;
      }
    }
  }
`;

const StyledAdButton = styled.div`
  margin: 60px 0 40px 0;
  display: flex;
  justify-content: center;
  h3 {
    background-color: #ffc045;
    padding: 5px 15px;
    font-size: 25px;
  }
`;

export default Menu;
