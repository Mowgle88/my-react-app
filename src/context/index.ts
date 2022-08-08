import { createContext } from "react";

interface AuthContextInterface {
  isAuth: boolean,
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean
}

export const AuthContext = createContext<AuthContextInterface>(
  {isAuth: false, setIsAuth: () => true, isLoading: true}
);