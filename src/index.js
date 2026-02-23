import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Jenkins CI/CD kavineswar</h1>
      <p>React app deployed using GitHub → Jenkins → Docker</p>
      <p>React app deployed using GitHub → Jenkins → Docker</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
