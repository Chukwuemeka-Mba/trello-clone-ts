import React from "react";
import { ColumnContainer, ColumnTitle } from "../assets/styles/styles";
import AddNewItem from "./AddNewItem";
interface ColumnProps {
  title?: String;
}
export const Column = ({
  title,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
