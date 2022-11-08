import { createContext, useState } from "react";

export const authContext = createContext(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  return <authContext.Provider value={null}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
