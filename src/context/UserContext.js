import React, { useState, createContext } from 'react';
import { sampleUserData } from '../mockData';

export const UserContext = createContext();

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
