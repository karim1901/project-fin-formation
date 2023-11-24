import React from "react";
import { useState } from "react";
import Search from "./search";
import Categoriers from "./categories";
import Cards from "./crads";
import MenuFooter from "./menuFooter";





function Container_product(){

    return <div className={`container_products`}>
        <Search/>
        <Categoriers/>
        <Cards />
        <MenuFooter/>
    </div>
}


export default Container_product