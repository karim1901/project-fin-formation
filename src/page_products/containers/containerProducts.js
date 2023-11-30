import React from "react";

import Search from "./container_products/search";
import Categoriers from "./container_products/categories";
import MenuFooter from "./container_products/menuFooter";

import { useState } from "react";

import Header from "./container_products/product/header";
import Image from "./container_products/product/image";
import Inputs from "./container_products/product/inputs";
import Btn from "./container_products/product/btn";



function ContainerProducts(){

    const [productUpdate ,setproductUpdate] = useState('')
    const [action ,setAction ] = useState('')



    const products =[
        {id:1,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg"},
        {id:2,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImHGHP59K-XwP507ezONBUGNDpdLNBt_dbA&usqp=CAU"},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5RT9aqok-ZqQkKr8egmAGYUi_bhNzWU3Ug6NWTPAqf5oPMMjYKyD-d7Hs2u1-uOmzZ0&usqp=CAU"},
        {id:5,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:6,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://a.storyblok.com/f/191576/1200x800/2657a50027/add_text_to_photo_after_.webp"},
        {id:7,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImHGHP59K-XwP507ezONBUGNDpdLNBt_dbA&usqp=CAU"},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5RT9aqok-ZqQkKr8egmAGYUi_bhNzWU3Ug6NWTPAqf5oPMMjYKyD-d7Hs2u1-uOmzZ0&usqp=CAU"},
        {id:5,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:6,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://a.storyblok.com/f/191576/1200x800/2657a50027/add_text_to_photo_after_.webp"},
        {id:7,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},
        {id:8,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:8,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:9,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"},
    ]



    const showUpdate =(id)=> {
        const pro = products.find(product => product.id == id )

        const show = <>

            <Header  />
            <div className="infoProduct">
                <Image url = {pro.thumbnail} />
                <Inputs product={pro} />
                <Btn/>
            </div>

        </>


        setproductUpdate(show)

    }

    const addActive = (selectors) => {
        selectors.map(selector =>{
            const element = document.querySelector(selector);
            element.classList.add('active')
        })
    };
    
    return <div className="container">
        <div className='container_products'>
            <Search/>
            <Categoriers/>
            <div className='cards'>
                {
                    products.map(product =>{
                        return (
                            <div className="cardProduct" key={product.id} id={product.id} onClick={(e)=> {
                                showUpdate(e.target.id)
                                addActive(['.container_products','.cards','.container_update'])
                                }}>
                                <div className="img" id={product.id}>
                                    <img src={product.thumbnail} id={product.id} alt=""/>
                                </div>
                                <div className="info" id={product.id}>
                                    <h4>{product.title} </h4>
                                    <h3>{product.price},00 DH</h3>
                                    <div className="stock_sold">
                                        <p>Stock : <p>{product.stock}</p> </p>
                                        <p>Sold : <p>{product.sold}</p> </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <MenuFooter/>
        </div>

        
        <div className="container_update">
            {productUpdate}
        </div>
    
    </div>
}

export default ContainerProducts