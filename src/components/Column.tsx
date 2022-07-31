import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../assets/styles/styles";
import { useAppState } from "../utils/AppStateContext";
import AddNewItem from "./AddNewItem";
import { Card } from "../components/Card";
import { useItemDrag } from "../utils/useItemDrag";
interface ColumnProps {
  title?: string;
  index: number;
  id: string;
}
export const Column = ({ title, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, index, title });
  drag(ref);

  return (
    <ColumnContainer ref={ref}>
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
