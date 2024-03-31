import React from "react";
import '../style/AddProduct.css'

const AddProduct = () => {
    return (
        <>
            <div className="heading">
                <h1>Listing A New Product </h1>
            </div>
            <div className="separation">

            </div>
            <div className="input proname">
                <h3>Name of Product:</h3>
            <input className="name" type="text" placeholder="Enter Product Name" />

            </div>
            <div className="proprice">
                <h3>Price of Product per Kg:</h3>
                <input className="price" type="text" placeholder="Enter Price" />

            </div>
            <div className="input">
                <h3>Name of Seller :</h3>
                <input className="name" type="text" placeholder="Enter Seller's Name" />

            </div>
            <div className="image_class">
                <h3>Product Image: </h3>
                <input className="images" type="file" accept="image" />

            </div>
            <div className="submitbtn">
                
                <button className="sub">Submit</button>
            </div>
        </>
    );
}

export default AddProduct;