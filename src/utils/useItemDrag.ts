import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./dragItem";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: item.type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  }));
  const getEmptyImage = () => {
    return null;
  };
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return { drag, isDragging };
};
