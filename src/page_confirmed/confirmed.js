import React, { useState } from "react";
import Header from "../page_orders/header";
import { orders, pencil } from "../page_dashbord/icon";


function Confirmed(){

    const [isInputDisabled ,setIsInputDisbled]= useState(true)

    const Orders =  [
        {id:1,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg",name:'oussama karim', phone:'0681109073',city:'agadir' ,adresse:"hay zaitoune bloc F tiiouine"},
        {id:2,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg",name:'ali ali', phone:'0634109433',city:'agadir' ,adresse:"tikouine agadir"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImHGHP59K-XwP507ezONBUGNDpdLNBt_dbA&usqp=CAU",name:'hamza hamza ', phone:'0687362073',city:'agadir' ,adresse:"hay zaitoune "},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5RT9aqok-ZqQkKr8egmAGYUi_bhNzWU3Ug6NWTPAqf5oPMMjYKyD-d7Hs2u1-uOmzZ0&usqp=CAU",name:'ismail karim', phone:'0655043073',city:'agadir' ,adresse:"hay zaitoune tiiouine"},
        {id:1,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg",name:'oussama karim', phone:'0681109073',city:'agadir' ,adresse:"hay zaitoune bloc F tiiouine"},
        {id:2,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg",name:'ali ali', phone:'0634109433',city:'agadir' ,adresse:"tikouine agadir"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImHGHP59K-XwP507ezONBUGNDpdLNBt_dbA&usqp=CAU",name:'hamza hamza ', phone:'0687362073',city:'agadir' ,adresse:"hay zaitoune "},
        {id:1,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg",name:'oussama karim', phone:'0681109073',city:'agadir' ,adresse:"hay zaitoune bloc F tiiouine"},
        {id:2,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg",name:'ali ali', phone:'0634109433',city:'agadir' ,adresse:"tikouine agadir"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImHGHP59K-XwP507ezONBUGNDpdLNBt_dbA&usqp=CAU",name:'hamza hamza ', phone:'0687362073',city:'agadir' ,adresse:"hay zaitoune "},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5RT9aqok-ZqQkKr8egmAGYUi_bhNzWU3Ug6NWTPAqf5oPMMjYKyD-d7Hs2u1-uOmzZ0&usqp=CAU",name:'ismail karim', phone:'0655043073',city:'agadir' ,adresse:"hay zaitoune tiiouine"},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5RT9aqok-ZqQkKr8egmAGYUi_bhNzWU3Ug6NWTPAqf5oPMMjYKyD-d7Hs2u1-uOmzZ0&usqp=CAU",name:'ismail karim', phone:'0655043073',city:'agadir' ,adresse:"hay zaitoune tiiouine"},
    ]





    return <div className="containerOrders">
        <Header title={'Confirmed'}/>
        
        <div className="cards">

            {
                Orders.map(order=>{
                    return <div className="card">
                        <div className="img">
                            <img src={order.thumbnail} alt="product"/>
                        </div>
                        <div className="infoProduct">
                            <p>{order.title} </p>
                            <p>{order.price},00 DH</p>
                            <div className="date_quan">
                                <small>Data order : 01/12/2023</small>
                                <small>Quantity : 2 piece</small>
                            </div>
                            <div className="btn">
                                <button>Cancel</button>
                                <button>Send</button>
                            </div>
                        </div>
                        <div className="infoCustomer">
                            <div >
                                <p>Information Customer</p>
                            </div>
        
                            <table>
                                <tr>
                                    <td><p>Name</p></td>
                                    <td>:
                                        <input type="text"  value={order.name} disabled = {isInputDisabled} />
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Phone</p></td>
                                    <td>:
                                        <input type="text"  value={order.phone} disabled= {isInputDisabled}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>City</p></td>
                                    <td>:
                                        <input type="text"  value={order.city} disabled= {isInputDisabled}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>Adresse</p></td>
                                    <td>:
                                        <input type="text"  value={order.adresse} disabled = {isInputDisabled}/>
                                    </td>
                                </tr>
                            </table>
                        </div>
        
                    </div>
                })
            }




            
        </div>

    </div>
}


export default Confirmed