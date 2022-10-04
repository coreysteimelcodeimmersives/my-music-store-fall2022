import { createSlice } from '@reduxjs/toolkit';
import {
  addOneToCartItems,
  addToCartTotal,
  addOneToProductCount,
  multiplyProductCountByPrice,
  removeOneFromCartItems,
  subtractFromCartTotal,
  decrementOneFromProductCount,
  subtractItemsFromCartItems,
  subtractItemsPriceFromCartTotal,
  removeItemFromProductArray,
  cartInitialState,
} from './shoppingCartHelpers';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      // increment total by one,
      const updateCartItems = addOneToCartItems(state);
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
    },
    removeFromCart: (state, action) => {
      // decrement item count by one
      const updateCartItems = removeOneFromCartItems(state);
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
    },
    deleteItemFromCart: (state, action) => {
      // remove all of that item type from cart
      // update the items
      const updateCartItems = subtractItemsFromCartItems(state, action);
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
    },
    emptyCart: () => {
      return cartInitialState;
    },
  },
});

//Action creators. functions that when we call it, create our action
export const { addToCart, removeFromCart, deleteItemFromCart, emptyCart } =
  shoppingCartSlice.actions;
export const { reducer: shoppingCartReducer } = shoppingCartSlice;
