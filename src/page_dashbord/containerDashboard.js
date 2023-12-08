import React from "react";
import { cancelling, confirmed, mystore, orders, star } from "./icon";
import { NavLink } from "react-router-dom";


function ConatinerDashboard(){
    return <div className="conatienrDashboard">
        <p>Dashboard</p>
        <div className="cards">
            <div className="card">
                <div>
                    <p>My store</p>
                    {mystore}
                </div>
                <p>346</p>
            </div>
            <NavLink to='/orders'>
                <div className="card">
                    <div>
                        <p>Orders</p>
                        {orders}
                    </div>
                    <p>346</p>
                </div>
            </NavLink>
            <NavLink to='/confirmed'>
                <div className="card">
                    <div>
                        <p>Confirmed</p>
                        {confirmed}
                    </div>
                    <p>346</p>
                </div>
            </NavLink>

            <NavLink to='/cancelling'>
                <div className="card">
                    <div>
                        <p>Cancelling</p>
                        {cancelling}
                    </div>
                    <p>346</p>
                </div>
            </NavLink>

        </div>

        <div className="theBest">
            <div className="bestProducts">
                <p>The Best Products</p>
                <table>
                    <tr>
                        <th>Products</th>
                        <th>Orders</th>
                        <th>Order Confirmed</th>
                        <th>Review</th>
                        <th>Earnings</th>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTqo-2Cx31C9tuzkiy5xYsOmUR1-_W-DuMA&usqp=CAU"/>
                            </div>
                            watch for men 
                        </td>
                        <td>43443</td>
                        <td>5353</td>
                        <td>{star}{star}{star}{star}{star}</td>
                        <td>45445,00 DH</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTqo-2Cx31C9tuzkiy5xYsOmUR1-_W-DuMA&usqp=CAU"/>
                            </div>
                            watch for men 
                        </td>
                        <td>43443</td>
                        <td>5353</td>
                        <td>{star}{star}{star}{star}{star}</td>
                        <td>45445,00 DH</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTqo-2Cx31C9tuzkiy5xYsOmUR1-_W-DuMA&usqp=CAU"/>
                            </div>
                            watch for men 
                        </td>
                        <td>43443</td>
                        <td>5353</td>
                        <td>{star}{star}{star}{star}{star}</td>
                        <td>45445,00 DH</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTqo-2Cx31C9tuzkiy5xYsOmUR1-_W-DuMA&usqp=CAU"/>
                            </div>
                            watch for men 
                        </td>
                        <td>43443</td>
                        <td>5353</td>
                        <td>{star}{star}{star}{star}{star}</td>
                        <td>45445,00 DH</td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTqo-2Cx31C9tuzkiy5xYsOmUR1-_W-DuMA&usqp=CAU"/>
                            </div>
                            watch for men 
                        </td>
                        <td>43443</td>
                        <td>5353</td>
                        <td>{star}{star}{star}{star}{star}</td>
                        <td>45445,00 DH</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTqo-2Cx31C9tuzkiy5xYsOmUR1-_W-DuMA&usqp=CAU"/>
                            </div>
                            watch for men 
                        </td>
                        <td>43443</td>
                        <td>5353</td>
                        <td>{star}{star}{star}{star}{star}</td>
                        <td>45445,00 DH</td>
                    </tr>

                </table>
            </div>
            <div className="bestEmployees">
                <p>The Best Employees</p>
                <table>
                    <tr>
                        <th>Employees</th>
                        <th>Number Sales</th>
                    </tr>           
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <small>OK</small>
                                </div>
                                <p>Oussama karim</p>
                            </td>
                            <td>343343,95 DH</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <small>AF</small>
                                </div>
                                <p>Ait brik Fatima</p>
                            </td>
                            <td>343343,94 DH</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <small>OK</small>
                                </div>
                                <p>Oussama karim</p>
                            </td>
                            <td>343343,95 DH</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <small>AF</small>
                                </div>
                                <p>Ait brik Fatima</p>
                            </td>
                            <td>343343,94 DH</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <small>OK</small>
                                </div>
                                <p>Oussama karim</p>
                            </td>
                            <td>343343,95 DH</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <small>AF</small>
                                </div>
                                <p>Ait brik Fatima</p>
                            </td>
                            <td>343343,94 DH</td>
                        </tr>



                    </tbody>



                </table>
            </div>
        </div>
        
    </div>
}

export default ConatinerDashboard