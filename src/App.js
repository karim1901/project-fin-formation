import React from "react";
import './App.css' 
import NavBar from "./navBar/navBar";
import { BrowserRouter,NavLink,Route, Routes } from "react-router-dom";
import ContainerProducts from "./page_products/containers/containerProducts";
import ConatinerDashboard from "./page_dashbord/containerDashboard";
import Orders from "./page_orders/order";
import Confirmed from "./page_confirmed/confirmed";
import Cancelling from "./page_cancelling/cancelling";
import Employees from "./page_employee/employee";


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
          <Route path="/confirmed" element={<Confirmed/>} />
          <Route path="/cancelling" element={<Cancelling/>} />
          <Route path="/employees" element={<Employees/>} />

        </Routes>
    </BrowserRouter>

  );
}

export default App;
