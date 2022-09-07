import { useContext, createContext, useState } from 'react';

const StateContext = createContext();

const initState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

export const GlobalProvider = (props) => {
  const { children } = props;

  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (click) => {
    setIsClicked({ ...initState, [click]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
