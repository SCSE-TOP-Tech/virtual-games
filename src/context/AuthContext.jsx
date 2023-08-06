"use client";
import { createContext, useReducer, useEffect, useContext } from "react";

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};

const AuthContext = createContext(INITIAL_STATE);
export const useAuth = () => useContext(AuthContext);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { user: action.payload, isAuthenticated: true };

    case "LOGIN_FAILURE":
      return { user: null, isAuthenticated: false };

    case "LOGOUT":
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
