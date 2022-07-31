import React from "react";
import { AppContainer } from "./assets/styles/styles";
import { Column } from "./components/Column";
import AddNewItem from "./components/AddNewItem";
import { useAppState } from "./utils/AppStateContext";

function App() {
  const { state, dispatch } = useAppState();

  return (
    <div className="App">
      <AppContainer>
        {state.lists.map((list, i) => (
          <Column
            id={list.id}
            title={list.title}
            key={list.id}
            index={i}
          ></Column>
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(title) => dispatch({ type: "ADD_LIST", payload: title })}
        ></AddNewItem>
      </AppContainer>
    </div>
  );
}

export default App;
