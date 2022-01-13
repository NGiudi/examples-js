import React from "react";

import { OnlineStatusProvider, useOnlineStatus } from "./useOnlineStatus";

const ExampleStatus = () => {

  const AppChildren = () => {
    const isOnline = useOnlineStatus();

    console.log("dentro del componente:", isOnline);

    if (isOnline) {
      return <h1>Tenemos internet :)</h1>;
    }

    return <h1>No Tenemos internet :(</h1>;
  };

  return (
    <OnlineStatusProvider>
      <AppChildren />
    </OnlineStatusProvider>
  );
};

export default ExampleStatus;