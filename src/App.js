import React from "react";

import ExampleStatus from "./components/ConnectionStatus/ExampleStatus";
import SetExample from "./Theory/Set";
import Notification from "./utils/Notification";

const App = () => {
  return (
    <>
      <Notification />
      <ExampleStatus />
      <SetExample />
    </>
  );
};

export default App;
