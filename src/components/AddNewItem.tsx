import React, { useState } from "react";
import NewItemForm from "./NewItemForm";
interface AddNewItemProps {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}

function AddNewItem({
  onAdd,
  toggleButtonText,
  dark,
}: React.PropsWithChildren<AddNewItemProps>) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return <button onClick={() => setShowForm(true)}>{toggleButtonText}</button>;
}

export default AddNewItem;
