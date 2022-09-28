import React, { useState, createContext, useContext } from 'react';

export const ShoppingCartContext = createContext();

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

const ShoppingCartContextProvider = (props) => {
  const { children } = props;
  const [shoppingCart, setShoppingCart] = useState({
    products: {},
    items: 0,
  });
  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
