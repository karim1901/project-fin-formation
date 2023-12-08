import React, { useState } from "react";
import Header from "./header";
import { orders, pencil } from "../page_dashbord/icon";


function Orders(){

    const [isInputDisabled ,setIsInputDisbled]= useState(true)


    const [name ,setName]  = useState('Oussama karim')
    const [phone,setPhone]  =useState('0681109073')
    const [city ,setCity] = useState('Agadir')
    const [adresse,setAdresse] = useState('hay zaitoune bloc F tikiouine ')


    const changeName =(e)=>{
        setName(e.target.value)
    }

    const changePhone =(e)=>{
        setPhone(e.target.value)
    }

    const changeCity =(e)=>{
        setCity(e.target.value)
    }

    const changeAdresse =(e)=>{
        setAdresse(e.target.value)
    }


    return <div className="containerOrders">
        <Header title={'Orders'}/>
        
        <div className="cards">
            <div className="card">
                <div className="img">
                    <img src="https://cgifurniture.com/wp-content/uploads/2019/05/product-design-3l-modelling-watch-case-View10-e1559037346110.jpg" alt=""/>
                </div>
                <div className="infoProduct">
                    <p>Watch for man </p>
                    <p>300,00 DH</p>
                    <div className="date_quan">
                        <small>Data order : 01/12/2023</small>
                        <small>Quantity : 2 piece</small>
                    </div>
                    <div className="btn">
                        <button>Delete</button>
                        <button>Confirm</button>
                    </div>
                </div>
                <div className="infoCustomer">
                    <div >
                        <p>Information Customer</p>
                        <span onClick={()=>{isInputDisabled ? setIsInputDisbled(false) : setIsInputDisbled(true)}}>{pencil}</span>
                    </div>

                    <table>
                        <tr>
                            <td><p>Name</p></td>
                            <td>:
                                <input type="text" onChange={changeName} value={name} disabled = {isInputDisabled} />
                            </td>
                        </tr>
                        <tr>
                            <td><p>Phone</p></td>
                            <td>:
                                <input type="text" onChange={changePhone} value={phone} disabled= {isInputDisabled}/>
                            </td>
                        </tr>
                        <tr>
                            <td><p>City</p></td>
                            <td>:
                                <input type="text" onChange={changeCity} value={city} disabled= {isInputDisabled}/>
                            </td>
                        </tr>
                        <tr>
                            <td><p>Adresse</p></td>
                            <td>:
                                <input type="text" onChange={changeAdresse} value={adresse} disabled = {isInputDisabled}/>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>

    </div>
}


export default Orders