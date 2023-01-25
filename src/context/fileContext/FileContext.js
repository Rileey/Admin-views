import FileReducer from "./FileReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  files: [],
  isFetching: false,
  error: false,
};

export const FileContext = createContext(INITIAL_STATE);

export const FileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FileReducer, INITIAL_STATE);

  return (
    <FileContext.Provider
      value={{
        files: state.files,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
