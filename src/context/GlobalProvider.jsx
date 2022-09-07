import { useContext, createContext, useState } from 'react';

const StateContext = createContext();

const initState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const GlobalProvider = (props) => {
  const { children } = props;

  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
