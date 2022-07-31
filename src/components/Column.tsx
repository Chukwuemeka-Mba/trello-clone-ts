import React from "react";
import { ColumnContainer, ColumnTitle } from "../assets/styles/styles";
import { useAppState } from "../utils/AppStateContext";
import AddNewItem from "./AddNewItem";
import { Card } from "../components/Card";
interface ColumnProps {
  title?: String;
  index: number;
  id: String;
}
export const Column = ({
  title,
  index,
  id,
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map(({ text, id }) => (
        <Card key={id} text={text}></Card>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
