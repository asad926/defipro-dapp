import React, {createContext, useReducer} from 'react';

const defaultGlobalState = {
    num: 0,
    userName: "",
    loggedIn: false
  };
  const globalStateContext = createContext(defaultGlobalState);
  
  const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      (state, newValue) => ({ ...state, ...newValue }),
      defaultGlobalState
    );
    return (
      <globalStateContext.Provider value={{state,dispatch}}>
=          {children}
=      </globalStateContext.Provider>
    );
  };

  export {globalStateContext ,GlobalStateProvider}