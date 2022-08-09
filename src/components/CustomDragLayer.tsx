import { useDragLayer, XYCoord } from "react-dnd";
import { CustomDragLayerContainer } from "../assets/styles/styles";
import { Column } from "./Column";

const CustomDragLayer = () => {
  const { isDragging, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
  }));

  function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
    if (!currentOffset) {
      return {
        display: "none",
      };
    }
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  }

  return isDragging ? (
    <CustomDragLayerContainer>
      <Column id={item.id} title={item.title} index={item.index} />
    </CustomDragLayerContainer>
  ) : null;
};
