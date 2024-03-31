import React from "react";
import '../style/Cart.css';


const Carts = () => {
    return (
        <div className="bjob">
            <section className="fullCart">
                <div class="container">
                    <h2 >Your Cart</h2>
                    <div class="cart1">
                        <div class="cart_item_cont">
                            <div class="cart-item">
                                <div class="row">
                                    <div class="center-item">
                                        <img src="src/assets/product-1.png" alt=""/>
                                        <p>iPhone 11 128GB Black( Rs1219 )</p>
                                    </div>

                                    <div class="center-item icons">
                                        <div class="input-group number-spinner">
                                            
                                            <input id="phone-number" type="number" min="0" class="form-control text-center" value="3"/>
                                                
                                        </div>
                                        <p>Rs<span id="phone-total">1219</span> </p>
                                        <img src="src/assets/delete.png" alt="" class="remove-item"/>
                                    </div>
                                </div>
                            </div>

                            <div class="cart-item">
                                <div class="row">
                                    <div class="center-item">
                                        <img src="src/assets/product-2.png" alt=""/>
                                        <p>iPhone 11 128GB Black( Rs1219 )</p>
                                    </div>
                                    <div class="center-item icons">
                                        <div class="input-group number-spinner">
                                            
                                            <input id="case-number" type="number" min="0" class="form-control text-center" value="2"/>
                                                

                                        </div>
                                        <p>Rs<span id="phone-total">1219</span> </p>
                                        <img src="src/assets/delete.png" alt="" class="remove-item"/>
                                    </div>
                                </div>
                            </div>
                            

                            <div class="cart-item">
                                <div class="amt_box">

                                    <div class="it">
                                        <h5>Subtotal: </h5>
                                        <h5>Tax:</h5>
                                        <h5>Total:</h5>
                                    </div>

                                    <div class="status pri">
                                        <p>Rs<span id="sub-total">1,278</span></p>
                                        <p>Rs<span id="tax-amount">0</span></p>
                                        <p>Rs<span id="total-price">1,278</span></p>
                                    </div>

                                </div>
                            </div>
                            <div class="check-out-box">
                                <button type="button" class="btn btn-success check-out">Check Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Carts;