import React, { useState, useEffect, useContext } from "react";

const OnlineStatusContext = React.createContext(true);

export const OnlineStatusProvider = (props) => {
  const { children } = props;

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("online");
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export const useOnlineStatus = () => {
  const store = useContext(OnlineStatusContext);
  return store;
};