import React from "react";
import Routed from "./Routed";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Routed />
    </AuthContextProvider>
  );
}

export default App;