import React, { Component } from 'react'

export default class TopBarAndHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartShow: false,
        }
        this.onCartShow = this.onCartShow.bind(this);
    }

    componentDidMount() {
        
    }

    pageOnClickScroller(id) {
        const anchor = document.querySelector('#'+id)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'nearest',delay: 5000, inline: 'nearest' })
    }

    onClickPage(url) {
        window.location.href = "/"+url;
    }

    onCartShow() {
        if(this.state.cartShow) {
            $("#cart-floating-box").stop().slideDown(1000);
            this.setState({ ['cartShow']:false});
        } else {
            $("#cart-floating-box").stop().slideUp(1000);
            this.setState({ ['cartShow']:true});

        }
    }
    
    render() {
        console.log('this.state.cartShow :>> ', this.state.cartShow);
        // let pdata = this.props.data ? this.props.data.count : '0';
        // console.log('this.props.data.addCart :>> ', this.props.data.addCart);
        let addCartList = '';
        addCartList = this.props.data.addCart.map(product=> (
        addCartList = <div className="cart-float-single-item d-flex" key={product.id}>
                            <span className="remove-item"><a onClick={()=>this.props.removeProduct(product)}><i className="fa fa-times"></i></a></span>
                            <div className="cart-float-single-item-image">
                                <a href="single-product.html"><img src={'/storage/posts/'+product.product_image} className="img-fluid" alt=""/></a>
                            </div>
                            <div className="cart-float-single-item-desc">
                                <p className="product-title"> <a href="single-product.html">{product.product_name} </a></p>
                                <p className="price"><span className="count">1x</span> ${product.price_per_unit}</p>
                            </div>
                        </div>
                        ));
        return (
            <div>
                <section>
                    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                        <div className="container d-flex">
                            <div className="contact-info mr-auto">
                                <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                                <i className="icofont-phone"></i> +1 5589 55488 55
                            </div>
                            <button className="login-btn"><a onClick={()=>this.onClickPage('login')}><i className="icofont-user-suited"> <b>প্রবেশ</b></i></a></button>
                            <a onClick={()=>this.onClickPage('register')} className="get-started-btn scrollto">নিবন্ধন</a> 
                        </div>
                    </div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                        <h1 className="logo mr-auto"><a href="">কৃষিসেবা</a></h1>
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><a onClick={()=>this.props.showPage(null)}>হোম</a></li>
                                <li><a onClick={()=>this.pageOnClickScroller('whyus')}>আমাদের সমাধান</a></li>
                                <li><a onClick={()=>this.pageOnClickScroller('services')}>সেবাসমূহ</a></li>
                                <li><a onClick={()=>this.props.showPage('findProducts')}>পণ্য</a></li>
                                <li><a onClick={()=>this.pageOnClickScroller('contact')}>যোগাযোগ</a></li>
                                <li className="drop-down"><a >আমাদের সম্পর্কে আরও</a>
                                    <ul>
                                    <li><a onClick={()=>this.props.showPage('team')}>আমাদের টিম</a></li>
                                    {/* <li><a href="whyus.html">আমাদের সমাধান</a></li> */}
                                    <li><a onClick={()=>this.props.showPage('faq')}>জিজ্ঞাসা</a></li>
                                    </ul>
                                </li>
                                <li></li>
                                <div className="shopping-cart" id="shopping-cart"  >
                                    <a onClick={this.onCartShow}>
                                        <div className="cart-icon d-inline-block">
                                            <span className="icon_bag_alt"></span>
                                        </div>
                                        <div className="cart-info d-inline-block" >
                                            <p>Shopping Cart 
                                                <span>
                                                    {this.props.data.addCart.length} items
                                                </span>
                                            </p>
                                        </div>
                                    </a>
                                    <div className="cart-floating-box bg-white" id="cart-floating-box">
                                        <div className="cart-items ">
                                            {addCartList}
                                        </div>
                                        <div className="floating-cart-btn text-center">
                                            <a className="float-right" href="">View Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                        </div>
                    </header>
                </section>
            </div>
        )
    }
}
