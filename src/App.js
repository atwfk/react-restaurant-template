import React from "react";
import styled from "styled-components";
import GlobalStyles from "./components/UI/GlobalStyles";
import LandingPage from "./components/LandingPage/LandingPage";
import Menu from "./components/Menu/Menu";
import IngredientsMenu from "./components/IngredientsMenu/IngredientsMenu";
import UpcomingOffers from "./components/UpcomingOffers/UpcomingOffers";
import BookTable from "./components/BookTable/BookTable";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <LandingPage />
      <main>
        <StyledContainer>
          <Menu />
          <IngredientsMenu />
          <UpcomingOffers />
          <BookTable />
        </StyledContainer>
      </main>
      <Contact />
    </div>
  );
};

const StyledContainer = styled.div`
  @media (min-width: 1600px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

export default App;
