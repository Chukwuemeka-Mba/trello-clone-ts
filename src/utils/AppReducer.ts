import { v4 as uuidv4 } from "uuid";
import { findItemIndexById } from "./findItemById";
export const appData: AppState = {
  lists: [
    {
      id: "0",
      title: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      title: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      title: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

export interface AppState {
  lists: List[];
}
interface Task {
  id: string;
  text: string;
}
interface List {
  id: string;
  title: string;
  tasks: Task[];
}

export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    };

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: uuidv4(),
            title: action.payload,
            tasks: [],
          },
        ],
      };
    }
    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      );
      if (action.payload.text !== "")
        state.lists[targetLaneIndex].tasks.push({
          id: uuidv4(),
          text: action.payload.text,
        });

      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
