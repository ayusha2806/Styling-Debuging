import React, { useState,useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin:(email,password)=>{}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(false);
  }
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn','2');
    setIsLoggedIn(true);
  };
  return <AuthContext.Provider
  value={{
    isLoggedIn:isLoggedIn,
    onLogout:logoutHandler, 
    onLogin: loginHandler 
  }}
  >
    {props.children}
    </AuthContext.Provider>;
}

export default AuthContext;