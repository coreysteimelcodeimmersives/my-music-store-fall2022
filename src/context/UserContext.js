import React, { createContext, useContext, useReducer } from 'react';

const ACTIONS = {
  SIGN_IN: 'sign-in',
  SIGN_OUT: 'sign-out',
};

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SIGN_IN: {
      return { ...action.payload.userData };
    }
    case ACTIONS.SIGN_OUT: {
      return undefined;
    }

    default: {
      return state;
    }
  }
};

const UserContextProvider = (props) => {
  const { children } = props;
  const userInitialState = undefined;
  const [user, dispatch] = useReducer(reducer, userInitialState);
  const signIn = (userData) =>
    dispatch({ type: ACTIONS.SIGN_IN, payload: { userData } });
  const signOut = () => dispatch({ type: ACTIONS.SIGN_OUT });

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
