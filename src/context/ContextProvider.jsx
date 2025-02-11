import { useState } from "react";
import { createContext } from "react";

export const BallContext = createContext(null);

export const BallProvider = ({ children }) => {
  const [ball, setBall] = useState([]);

  return (
    <BallContext.Provider value={{ ball, setBall }}>
      {children}
    </BallContext.Provider>
  );
};
