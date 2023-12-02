import React from "react";
import { cancelling, confirmed, mystore, orders, update } from "../page_dashbord/icon";


function Header(){
    return  <div className="header">
        <p>Orders</p>
        <div className="menu">
            <div className="element" >
                <div>
                    {mystore}
                </div>
                <p>My store</p>
            </div>
            <div className="element" >
                <div>
                    {orders}
                </div>
                <p>Orders</p>
            </div>
            <div className="element" >
                <div>
                    {confirmed}
                </div>
                <p>Confirmed</p>
            </div>
            <div className="element" >
                <div>
                    {cancelling}
                </div>
                <p>Cancelling</p>
            </div>
        </div>
    </div>

}
export default Header

