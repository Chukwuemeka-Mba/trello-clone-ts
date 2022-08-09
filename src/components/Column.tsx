import React, { useRef } from "react";
import { ColumnContainer, ColumnTitle } from "../assets/styles/styles";
import { useAppState } from "../utils/AppStateContext";
import AddNewItem from "./AddNewItem";
import { Card } from "../components/Card";
import { useItemDrag } from "../utils/useItemDrag";
import { useDrop } from "react-dnd";
import { DragItem } from "../utils/dragItem";
import { isHidden } from "../utils/isHidden";

interface ColumnProps {
  title?: string;
  index: number;
  id: string;
  isPreview?: boolean;
}
export const Column = ({ title, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({
    type: "COLUMN",
    id,
    index,
    title,
  });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });
  drag(drop(ref));
  return (
    <ColumnContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(isPreview, state.draggedItem, "COLUMN", id)}
    >
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
