import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Profile from "./profile";


function NavBar(){

    const screenWidth = window.screen.width;


    return <div className="navbar" style={{width:screenWidth}}>
        <Logo/>
        <Menu/>
        <Profile/>
    </div>
}


export default NavBar