import React from "react";
import Header from "./header";
import Image from "./image";
import Inputs from "./inputs";
import Btn from "./btn";






function Container_update(){

    const products =[
        {id:1,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg"},
        {id:2,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg"},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},
        {id:5,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:6,title:"Samsung Universe 9",description:"Samsung'sew variant which goes beyond Galaxy  new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"},
        {id:7,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},
        {id:8,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:9,title:"Samsung Universe 9",description:"Samsung's nto the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"},
    ]






    return <div className="container_update">
            <Header/>
            <Image />
            <Inputs/>
            <Btn/>
    </div>
}


export default Container_update