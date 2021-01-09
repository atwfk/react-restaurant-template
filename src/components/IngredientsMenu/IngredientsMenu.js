import React, { useState } from "react";
import styled from "styled-components";
import ingredient1 from "../../assets/images/burgerMenu1.png";
import ingredient2 from "../../assets/images/burgerMenu2.png";

const IngredientsMenu = () => {
  const [ingredients] = useState([
    {
      src: ingredient1,
      ingOffer: "Lorem ipsum dolor",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      src: ingredient2,
      ingOffer: "Lorem ipsum dolor",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      src: ingredient1,
      ingOffer: "Lorem ipsum dolor",
      ingredients:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
  ]);
  return (
    <StyledIngredients>
      <h2 className="ingredients-title">Choose & Enjoy</h2>
      <div className="ingredients-par">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div className="ingredients">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient">
            <img src={ingredient.src} alt="ingredients" />
            <h3>{ingredient.ingOffer}</h3>
            <p>{ingredient.ingredients}</p>
            <button>ORDER NOW</button>
          </div>
        ))}
      </div>
    </StyledIngredients>
  );
};

const StyledIngredients = styled.section`
  padding-bottom: 100px;
  text-align: center;
  .ingredients-title {
    font-size: 55px;
  }
  .ingredients-par {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    p {
      width: 65%;
      font-weight: normal;
      @media (max-width: 775px) {
        width: 80%;
      }
    }
  }
  .ingredients {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    .ingredient {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 350px;
      }
      h3 {
        margin-top: 15px;
        font-size: 30px;
      }
      p {
        margin-top: 10px;
        width: 65%;
      }
      button {
        margin-top: 25px;
        background-color: #d51b1b;
        font-size: 17px;
        border: none;
        padding: 12px 30px;
        color: #fff;
        font-weight: bold;
        transition: 0.3s;
        cursor: pointer;
        :hover {
          background-color: #bf2222;
        }
      }
    }
  }
`;

export default IngredientsMenu;
