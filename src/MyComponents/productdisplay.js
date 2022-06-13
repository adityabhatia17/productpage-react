import React from "react";

export default function ProductDisplay(props){
    const discount = parseInt((props.productMRP - props.productPrice)/props.productMRP * 100);

    return(
        <>
            <div className="container">
                <div className="product-img">
                    <img src={props.productImage} alt={props.productName} className="product-in"/>
                </div>
                <div className="product-details">
                    <div className="productname">
                        {props.productName}
                    </div>
                    <div className="pricebar">
                        <p className="price">Rs. {props.productPrice}</p>
                        <p className="mrp">{props.productMRP}</p>
                        <p className="discount">({discount}% OFF)</p>
                    </div>
                </div>
            </div>
        </>
    )
}