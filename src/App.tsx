import React from "react";
import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer,
} from "./assets/styles/styles";
function App() {
  return (
    <div className="App">
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>World of Walker</ColumnTitle>
          <CardContainer>Alan Walker, Torine</CardContainer>
        </ColumnContainer>
      </AppContainer>
    </div>
  );
}

export default App;
