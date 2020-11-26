import React from "react";
import "./styles/App.scss";
import "./styles/normalize.scss";
import { Header, Images } from "./components";

// [{},{}]
// [filters]
// [{filter:[]}]

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Images />
    </>
  );
};

export default App;
