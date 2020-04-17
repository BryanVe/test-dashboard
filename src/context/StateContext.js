import React, { useState } from "react";

export const StateContext = React.createContext();

const StateContextProvider = ({ children }) => {
  const [state, setState] = useState({
    openSidebarMobile: false,
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export const StateContextConsumer = StateContext.Consumer;

export { StateContextProvider };
