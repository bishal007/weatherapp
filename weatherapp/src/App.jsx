import { useState } from "react";
import Weather from "./Weather";

function App() {
  return (
    <>
      <div
        style={{
          marginLeft: "130%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Weather />
      </div>
    </>
  );
}

export default App;
