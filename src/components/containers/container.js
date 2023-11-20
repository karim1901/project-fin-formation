import React from "react";
import Container_product from "./container_products/container_product";
import Container_update from "./container_products/product/container_update";


function Containers(){
    return <div className="container">
        <Container_product/>
        <Container_update/>
    </div>
}

export default Containers