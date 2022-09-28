import React, { useState, createContext, useContext } from 'react';
import { sampleUserData } from '../mockData';

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState({ ...sampleUserData });
  const [signIn, setSignIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, signIn, setSignIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
