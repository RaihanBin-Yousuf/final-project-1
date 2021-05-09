import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Hero from '../includes/Hero';
import TopCategorySlider from '../includes/TopCategorySlider';
import TabSlider from '../includes/TabSlider';
import AboutUs from '../includes/AboutUs';
import HowItsWorks from '../includes/HowItsWorks';
import Service from '../includes/Service';
import Cta from '../includes/Cta';
import Contact from '../includes/Contact';
import Footer from '../includes/Footer';
import Team from '../includes/Team';
import TopBarAndHeader from '../includes/TopBarAndHeader';
import Faq from '../includes/Faq';
import FindProducts from '../includes/FindProducts';
import Filter from '../includes/Filter';
import DetailsPage from '../includes/DetailsPage';
import Test from '../includes/Test';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_page: null,
            product: [],
            count: 0,
            product_info: []
        };
        this.showPage = this.showPage.bind(this);
        this.productDetails = this.productDetails.bind(this);
        this.addCount = this.addCount.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
    }

    showPage(page) {
        this.setState({ ['show_page']: page });
    }

    componentDidMount() {

    }

    productDetails(data) {
        // console.log('data :>> ', data);
        this.setState({ ['product']: data, });
        this.showPage('filter');
    }

    viewDetails(data) {
        console.log('data :>> ', data);
    }

    addCount() {
        const count = this.state.count +1;
        this.setState({ ['count']: count});
    }

    render() {
        // console.log('this.state :>> ', this.state);
        let showPageName = '';
        if(this.state.show_page === null) {
            showPageName = <div>
                                <Hero/>
                                <TopCategorySlider productDetails={this.productDetails}/>
                                <TabSlider addCount={this.addCount} data={this.state} viewDetails={this.viewDetails}/>
                                <AboutUs/>
                                <HowItsWorks/>
                                <Service/>
                                <Cta/>
                                <Contact/>
                            </div>
        } else if(this.state.show_page === 'productdetails') {
            showPageName = <DetailsPage/>
        } else if(this.state.show_page === 'findProducts') {
            showPageName = <FindProducts/>
        } else if(this.state.show_page === 'team') {
            showPageName = <Team/>
        } else if(this.state.show_page === 'faq') {
            showPageName = <Faq/>
        } else if(this.state.show_page === 'filter') {
            showPageName = <Filter data = {this.state} />
        } else if (this.state.show_page === 'test') {
            showPageName = <Test data={this.state} />
        }
        return (
            <>  
                {/* <ShoppingCart data={this.state} /> */}
                <TopBarAndHeader data={this.state} showPage={this.showPage}/>

                {showPageName}
                {/* <Faq/> skipped */}
                {/* <Team/> skipped*/}
                {/* <Filter/> */}
                <Footer/>
                
            </>
        )
    }
}
if (document.getElementById('react_fronend_index')) {
    ReactDOM.render(<Index />, document.getElementById('react_fronend_index'));
}
