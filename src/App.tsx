import React from "react";
import { AppContainer } from "./assets/styles/styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import AddNewItem from "./components/AddNewItem";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Column title="To Do">
          <Card text="Generate app scaffold" />{" "}
        </Column>
        <Column title="In Progress">
          <Card text="Learn Typescript" />{" "}
        </Column>
        <Column title="Done">
          <Card text="Begin to use static typing" />{" "}
        </Column>
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={() => console.log("Added")}
        ></AddNewItem>
      </AppContainer>
    </div>
  );
}

export default App;
