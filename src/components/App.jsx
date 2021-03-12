import React from "react";
import Login from "./Login";

var isLoggedIn = false;
var userIsRegistered = true;

function App() {
  return (
    <div classname="container">
      <Login isRegistered={userIsRegistered} />}
    </div>
  );
}

export default App;
