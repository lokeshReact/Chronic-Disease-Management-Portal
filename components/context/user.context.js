'use client'
import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState({
    firstName:"Muthu",
    lastName:"kumar",

  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default createContext;
