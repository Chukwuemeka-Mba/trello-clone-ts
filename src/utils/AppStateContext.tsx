import React, { createContext, useContext, useReducer } from "react";
import { AppState, appData, appStateReducer } from "./AppReducer";
// Create Context with the createContext hook and pass the initial state into it

interface AppStateContextProps {
  state: AppState;
  dispatch: any;
}
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Use the created context in the useAppState hook

export const useAppState = () => {
  return useContext(AppStateContext);
};
