import React from "react";

import ExampleStatus from "./components/ConnectionStatus/ExampleStatus";
import FormExample from "./components/FormExample/FormExample";
import Notification from "./utils/Notification";

import { theoryMap, theorySet, theoryWeakSet, theoryWeakMap } from "./Theory";

const App = () => {
  theorySet();
  theoryMap();
  theoryWeakSet();
  theoryWeakMap();

  return (
    <>
      <Notification />
      <ExampleStatus />
      <FormExample />
    </>
  );
};

export default App;
