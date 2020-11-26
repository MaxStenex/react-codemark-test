import React, { useState } from "react";
import "./styles/App.scss";
import "./styles/normalize.scss";
import { Header, Images } from "./components";

const App: React.FC = () => {
  const [tagValue, setTagValue] = useState("");

  return (
    <>
      <Header tagValue={tagValue} setTagValue={setTagValue} />
      <Images setTagValue={setTagValue} />
    </>
  );
};

export default App;
