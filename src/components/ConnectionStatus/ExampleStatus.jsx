import React from "react";

import {
  OnlineStatusProvider,
  useOnlineStatus,
} from "../../hooks/useOnlineStatus";

const ExampleStatus = () => {
  const AppChildren = () => {
    const isOnline = useOnlineStatus();

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
