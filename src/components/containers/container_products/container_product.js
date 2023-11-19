import React from "react";
import Search from "./search";
import Categoriers from "./categories";
import Cards from "./crads";

function Container_product(){
    return <div className="container_products">
        <Search/>
        <Categoriers/>
        <Cards/>
    </div>
}


export default Container_product