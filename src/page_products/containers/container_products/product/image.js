import React, { useState } from "react";




function Image({url}){

    

    return <div className="image">
        <p>Image</p>
        <div>
            <img src={url} alt=""/>
        </div>
    </div>
}


export default Image