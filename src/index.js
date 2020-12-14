import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

//const element = <h1>Hello, World</h1>;

ReactDOM.render(<App />, document.getElementById("root"));

function DisplayUser(user) {
  return (
    <div>
      <h2>username: {user.name}</h2>
    </div>
  );
}

const element = <DisplayUser name="Saurabh" />;

ReactDOM.render(element, document.getElementById("user"));
