import React from "react";
import { cancelling, confirmed, mystore, orders, update } from "../page_dashbord/icon";
import { NavLink } from "react-router-dom";


function Header({title}){
    return  <div className="header">
        <p>{title}</p>
        <div className="menu">
            <div className="element" >
                <div>
                    {mystore}
                </div>
                <p>My store</p>
            </div>
            <NavLink to='/orders'>
                <div className="element" >
                    <div>
                        {orders}
                    </div>
                    <p>Orders</p>
                </div>
            </NavLink>

            <NavLink to='/confirmed'>
                <div className="element" >
                    <div>
                        {confirmed}
                    </div>
                    <p>Confirmed</p>
                </div>
            </NavLink>

            <NavLink to='/cancelling'>
                <div className="element" >
                    <div>
                        {cancelling}
                    </div>
                    <p>Cancelling</p>
                </div>
            </NavLink>

        </div>
    </div>

}
export default Header

