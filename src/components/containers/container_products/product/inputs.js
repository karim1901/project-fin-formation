import React from "react";


function Inputs(){
    return <div className="inputs">
        <label>Title</label>
        <input type="text" placeholder="Title" value='Smart watch i9' name="title" disabled/>
        <label>Description</label>
        <textarea name="description" disabled value='Smart watch i9 Montre Connectée Homme avec Appel Bluetooth, 1,39 HD Smartwatch avec 100+ Modes Sportifs avec Rappel de Message/Fréquence' ></textarea>
        <label>Quantity</label>
        <input type="text" value='210' placeholder="Quantity" name="quantity" disabled />
        <label>Category</label>
        <input type="text" value='watches' placeholder="Category" name="category" disabled />
        <label>Price Purchase</label>
        <input type="text" value='143' placeholder="Price Purchase (DH)" name="pricePurchase" disabled />
        <label>Price taxes</label>
        <input type="text" value='50' placeholder="Price taxes" name="priceTaxes" disabled />
        <label>Price Sale</label>
        <input type="text" value='400' placeholder="Price Sale" name="priceSale" disabled />
        <label>Employee</label>
        <div className="employees">
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            <div className="employee">
                <div className="name">
                    <small>OK</small>
                </div>
                <p>Oussama karim</p>
            </div>
            
        </div>
    </div>
}

export default Inputs