import React from "react";
import './App.css' 
import NavBar from "./components/navBar/navBar";
import Containers from "./components/containers/container";



function App() {
  return (
    <div className="App">
      < NavBar/>
      <Containers/>
    </div>
  );
}

export default App;
