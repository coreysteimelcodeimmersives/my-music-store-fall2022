import React, { createContext, useContext, useReducer } from 'react';

const ACTIONS = {
  ADD_TO_CART: 'add-to-cart',
  REMOVE_FROM_CART: 'remove-from-cart',
  DELETE_ITEM_FROM_CART: 'delete-item-from-cart',
  EMPTY_CART: 'empty-cart',
};

const cartInitialState = {
  products: [],
  items: 0,
  total: 0,
};

export const ShoppingCartContext = createContext();

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

const reducer = (cart, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      // increment total by one,
      const updateCartItems = addOneToCartItems(cart);
      // add to cart total
      const updateCartTotal = addToCartTotal(updateCartItems, action);
      // add one to product count
      const updateProductCount = addOneToProductCount(
        updateCartTotal.products,
        action
      );
      // add to product total
      const updateProductTotal = multiplyProductCountByPrice(
        updateProductCount,
        action
      );
      return { ...updateCartTotal, products: updateProductTotal };
    }
    case ACTIONS.REMOVE_FROM_CART: {
      // decrement item count by one
      const updateCartItems = removeOneFromCartItems(cart);
      // subtract from cart total
      const updateCartTotal = subtractFromCartTotal(updateCartItems, action);
      // decrement one from product count
      const updateProductCount = decrementOneFromProductCount(
        updateCartTotal.products,
        action
      );
      // subtract from product total
      const updateProductTotal = multiplyProductCountByPrice(
        updateProductCount,
        action
      );
      return { ...updateCartTotal, products: updateProductTotal };
    }
    case ACTIONS.DELETE_ITEM_FROM_CART: {
      // remove all of that item type from cart
      // update the items
      const updateCartItems = subtractItemsFromCartItems(cart, action);
      // update cart total
      const updateCartTotal = subtractItemsPriceFromCartTotal(
        updateCartItems,
        action
      );
      // update product array
      const updateProductArray = removeItemFromProductArray(
        updateCartTotal.products,
        action
      );
      return { ...updateCartTotal, products: updateProductArray };
    }
    case ACTIONS.EMPTY_CART: {
      return cartInitialState;
    }
    default: {
      return state;
    }
  }
};

const addOneToCartItems = (cart) => {
  return {
    ...cart,
    items: cart.items + 1,
  };
};

const addToCartTotal = (cart, action) => {
  return {
    ...cart,
    total: cart.total + action.payload.product.price,
  };
};

const addOneToProductCount = (productsArr, action) => {
  const productFound = productsArr.find(
    (product) => product.id === action.payload.product.id
  );
  if (productFound) {
    return productsArr.map((product) => {
      if (product.id === action.payload.product.id) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
  }
  return [...productsArr, { ...action.payload.product, count: 1 }];
};

const multiplyProductCountByPrice = (productsArr, action) => {
  return productsArr.map((product) => {
    if (product.id === action.payload.product.id) {
      return {
        ...product,
        total: product.price * product.count,
      };
    }
    return product;
  });
};

const removeOneFromCartItems = (cart) => {
  return {
    ...cart,
    items: cart.items - 1,
  };
};

const subtractFromCartTotal = (cart, action) => {
  return {
    ...cart,
    total: cart.total - action.payload.product.price,
  };
};

const decrementOneFromProductCount = (productsArr, action) => {
  return productsArr.map((product) => {
    if (product.id === action.payload.product.id) {
      return { ...product, count: action.payload.product.count - 1 };
    }
    return product;
  });
};

const subtractItemsFromCartItems = (cart, action) => {
  return { ...cart, items: cart.items - action.payload.product.count };
};

const subtractItemsPriceFromCartTotal = (cart, action) => {
  return {
    ...cart,
    total:
      cart.total - action.payload.product.count * action.payload.product.price,
  };
};

const removeItemFromProductArray = (productsArr, action) => {
  return productsArr.filter(
    (product) => product.id !== action.payload.product.id
  );
};

const ShoppingCartContextProvider = (props) => {
  const { children } = props;

  const [shoppingCart, dispatch] = useReducer(reducer, cartInitialState);
  const handleAddToCart = (product) =>
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: { product } });
  const handleRemoveFromCart = (product) =>
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: { product } });
  const handleDeleteItemFromCart = (product) =>
    dispatch({ type: ACTIONS.DELETE_ITEM_FROM_CART, payload: { product } });
  const handleEmptyCart = () => dispatch({ type: ACTIONS.EMPTY_CART });
  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        handleAddToCart,
        handleRemoveFromCart,
        handleDeleteItemFromCart,
        handleEmptyCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
