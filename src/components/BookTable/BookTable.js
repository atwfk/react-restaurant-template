import React from "react";
import styled from "styled-components";
import meal1 from "../../assets/images/meal1.png";
import meal2 from "../../assets/images/meal2.png";
import bottle from "../../assets/images/bottle.png";

const BookTable = () => {
  return (
    <StyledBooktable>
      <img className="burger" src={meal1} alt="meal" />
      <img className="meal" src={meal2} alt="meal" />
      <img className="bottle" src={bottle} alt="bottle" />
      <h3>Reservation</h3>
      <h2>Book your table</h2>
      <form>
        <div className="form-control">
          <input type="text" placeholder="NAME" />
          <input className="left" type="datetime" placeholder="DATE" />
          <input type="text" placeholder="PEOPLE" />
          <input className="left" type="email" placeholder="EMAIL" />
          <input type="datetime" placeholder="TIME" />
          <button className="left" type="submit">
            FIND A TABLE
          </button>
        </div>
      </form>
    </StyledBooktable>
  );
};

const StyledBooktable = styled.section`
  text-align: center;
  padding: 50px 0;
  position: relative;
  @media (max-width: 575px) {
    padding: 0;
  }
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
    position: absolute;
    z-index: -1;
  }
  img.burger {
    top: -10px;
    left: -10px;
    width: 200px;
    @media (max-width: 775px) {
      left: -100px;
    }
  }
  img.meal {
    width: 350px;
    height: 350px;
    bottom: -100px;
    right: -100px;
    transform: rotate(450deg);
    @media (max-width: 1300px) {
      right: -200px;
    }
    @media (max-width: 775px) {
      width: 250px;
      height: 250px;
      right: -150px;
    }
  }
  img.bottle {
    bottom: 50px;
    left: 50px;
    @media (max-width: 1300px) {
      left: -70px;
    }
  }
  h3 {
    font-size: 30px;
  }
  h2 {
    font-size: 55px;
    margin-bottom: 60px;
  }
  .form-control {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 20px;
    justify-items: flex-end;
    @media (max-width: 1050px) {
      justify-items: center;
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .left {
      justify-self: flex-start;
      @media (max-width: 1050px) {
        justify-self: center;
      }
    }
    input,
    button {
      width: 400px;
      padding: 20px;
      border: 1px solid #999;
      border-radius: 5px;
      outline: none;
      font-family: "Bebas Neue", cursive;
      font-size: 20px;
      @media (max-width: 575px) {
        width: 300px;
      }
    }
    input:not([type="submit"]):focus::-webkit-input-placeholder {
      opacity: 0;
      transition: 0.3s;
    }
    button {
      border: none;
      background-color: #d51b1b;
      color: #fff;
      transition: 0.3s;
      cursor: pointer;
      :hover {
        background-color: #bf2222;
      }
    }
  }
`;

export default BookTable;
