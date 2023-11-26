import React from "react"
import { addActive } from "./addActive"
// import Container_update from "./product/container_update"



function Cards(){


    const products =[
        {id:1,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://m.media-amazon.com/images/I/611mRs-imxL.jpg"},
        {id:2,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:3,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"},
        {id:4,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},
        {id:5,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:6,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"},
        {id:7,title:"iPhone 9",description:"An apple mobile which is nothing like apple",price:549,sold:232,stock:94,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"},
        {id:8,title:"iPhone X",description:"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",price:899,sold:232,stock:34,brand:"Apple",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"},
        {id:9,title:"Samsung Universe 9",description:"Samsung's new variant which goes beyond Galaxy to the Universe",price:1249,sold:232,stock:36,brand:"Samsung",category:"smartphones",thumbnail:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"},
    ]


    


    return <div className='cards'>
        {
            products.map(product =>{
                return (
                    <div className="cardProduct" key={product.id} id={product.id} onClick={(e)=> {
                        Container_update(e.target.id)
                        // addActive(['.container_products','.container_update','.cards'])
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
}


// export default Cards