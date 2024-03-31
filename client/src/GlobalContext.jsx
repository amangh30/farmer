import React, { createContext, useContext, useState,useEffect } from 'react';
import App from './App.jsx'
import Cookies from 'js-cookie';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [accountname,setAccountName] = useState('')
  const [access, setAccess] = useState(() => {
    // Initialize with the value from the cookie or default to false
    const accessCookie = Cookies.get('access');
    return accessCookie ? accessCookie === 'true' : false;
  });

  const [access2, setAccess2] = useState(() => {
    // Initialize with the value from the cookie or default to false
    const access2Cookie = Cookies.get('access2');
    return access2Cookie ? access2Cookie === 'true' : false;
  });

  useEffect(() => {
    // Update the cookie whenever access changes
    Cookies.set('access', access, { expires: 7 }); // Set cookie to expire in 7 days
  }, [access]);

  useEffect(() => {
    // Update the cookie whenever access2 changes
    Cookies.set('access2', access2, { expires: 7 }); // Set cookie to expire in 7 days
  }, [access2]);
  return (
    <GlobalContext.Provider value={{ access, setAccess , access2 , setAccess2,accountname,setAccountName }}>
        <App/>
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobal = () => useContext(GlobalContext);
