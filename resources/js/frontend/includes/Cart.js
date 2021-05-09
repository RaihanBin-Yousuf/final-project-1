import React, { Component } from 'react'

export default class Cart extends Component {
    
    render() {
        let pdata = this.props.data.addCart;
        console.log('pdata :>> ', pdata);
        let cartList = '';
        cartList = pdata.map(product=> (
        cartList = <tr>
                        <td className="pro-thumbnail"><a href="#"><img src="assets/images/products/product01.jpg" className="img-fluid" alt="Product"/></a></td>
                        <td className="pro-title"><a href="#">Cillum dolore tortor nisl fermentum</a></td>
                        <td className="pro-price"><span>$29.00</span></td>
                        <td className="pro-quantity"><div className="pro-qty"><input type="text" value="1"/></div></td> 
                        <td className="pro-subtotal"><span>$29.00</span></td>
                        <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                    </tr>
                    ));

        return (
            <div>
               <section> 
                    <div className="page-section section mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#">
                                        <div className="cart-table table-responsive mb-40">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="pro-thumbnail">Image</th>
                                                        <th className="pro-title">Product</th>
                                                        <th className="pro-price">Price</th>
                                                        <th className="pro-quantity">Quantity</th>
                                                        <th className="pro-subtotal">Total</th>
                                                        <th className="pro-remove">Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartList}
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="calculate-shipping">
                                                <h4>Calculate Shipping</h4>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <select className="nice-select">
                                                                <option>Bangladesh</option>
                                                                <option>China</option>
                                                                <option>country</option>
                                                                <option>India</option>
                                                                <option>Japan</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <select className="nice-select">
                                                                <option>Dhaka</option>
                                                                <option>Barisal</option>
                                                                <option>Khulna</option>
                                                                <option>Comilla</option>
                                                                <option>Chittagong</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="text" placeholder="Postcode / Zip"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="submit" value="Estimate"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="discount-coupon">
                                                <h4>Discount Coupon Code</h4>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="text" placeholder="Coupon Code"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="submit" value="Apply Code"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 d-flex">
                                            <div className="cart-summary">
                                                <div className="cart-summary-wrap">
                                                    <h4>Cart Summary</h4>
                                                    <p>Sub Total <span>$1250.00</span></p>
                                                    <p>Shipping Cost <span>$00.00</span></p>
                                                    <h2>Grand Total <span>$1250.00</span></h2>
                                                </div>
                                                <div className="cart-summary-button">
                                                    <button className="checkout-btn">Checkout</button>
                                                    <button className="update-btn">Update Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}