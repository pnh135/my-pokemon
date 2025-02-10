import { useState } from "react";
import { BallContext } from "./BallContext";

const BallProvider = ({ children }) => {
  const [ball, setBall] = useState(
    () => JSON.parse(window.localStorage.getItem("ball")) || []
  );

  return (
    <BallContext.Provider value={{ ball, setBall }}>
      {children}
    </BallContext.Provider>
  );
};

export default BallProvider;
