import React from "react";
import Login from "./Views/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => state);
  return <>{!auth.loggedIn ? <Login /> : <></>}</>;
}

export default App;
