import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handlerOpenLogin = () => {
    setOpenLogin(true);
  };

  const handlerOpenSignup = () => {
    setOpenLogin(false);
    setOpenSignup(true);
  };

  const handlerOpenAgainLogin = () => {
    setOpenLogin(true);
    setOpenSignup(false);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        openLogin,
        setOpenLogin,
        openSignup,
        setOpenSignup,
        handlerOpenLogin,
        handlerOpenSignup,
        handlerOpenAgainLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
