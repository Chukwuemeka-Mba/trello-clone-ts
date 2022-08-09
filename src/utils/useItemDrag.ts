import { useDrag } from "react-dnd";
import { useAppState } from "./AppStateContext";
import { DragItem } from "./dragItem";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: item.type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined }),
  }));
  return { drag, isDragging };
};
