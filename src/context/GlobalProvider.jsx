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
  const [currentColor, setCurrentColor] = useState('#03c9d7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };

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
        currentColor,
        setCurrentColor,
        setColor,
        currentMode,
        setCurrentMode,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
