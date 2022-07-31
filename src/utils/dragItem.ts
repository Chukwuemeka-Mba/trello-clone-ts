export type ColumnDragItem = {
  index: number;
  id: string;
  title: string | undefined;
  type: "COLUMN";
};
export type DragItem = ColumnDragItem;
