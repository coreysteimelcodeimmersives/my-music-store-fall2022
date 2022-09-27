import React, { useState, createContext } from 'react';

export const ShoppingCartContext = createContext();

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
