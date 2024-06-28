import { createContext, useContext, useEffect, useReducer } from "react";

const getInitialState = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  let role = null;

  if (user) {
    const parsedUser = JSON.parse(user);
    role = parsedUser.role;
  }

  return {
    user: user ? JSON.parse(user) : null,
    role: role,
    token: token || null,
  };
};

const initialState = getInitialState();

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      const { user, token } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);  // This line is actually redundant since role is part of user
      return {
        user: user,
        token: token,
        role: user.role,
      };

    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      return {
        user: null,
        token: null,
        role: null,
      };

    default:
      return state;
  }
};


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
