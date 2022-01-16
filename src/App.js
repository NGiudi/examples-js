import React from "react";

import ExampleStatus from "./components/ConnectionStatus/ExampleStatus";
import Notification from "./utils/Notification";

const App = () => {
  return (
    <>
      <Notification />
      <ExampleStatus />
    </>
  );
};

export default App;
