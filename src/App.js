import React from "react";
import './App.css' 
import NavBar from "./navBar/navBar";
import { BrowserRouter,NavLink,Route, Routes } from "react-router-dom";
import ContainerProducts from "./page_products/containers/containerProducts";
import ConatinerDashboard from "./page_dashbord/containerDashboard";
import Orders from "./page_orders/order";


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <NavBar/>
      </div>

      <Routes>
          
          <Route path="/" element={<ConatinerDashboard/>} />
          <Route path="/products" element={<ContainerProducts/>} />
          <Route path="/orders" element={<Orders/>} />

        </Routes>
    </BrowserRouter>

  );
}

export default App;
