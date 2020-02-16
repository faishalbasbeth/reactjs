import React, {Component, Fragment} from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';

class Product extends Component {
    // state = {
    //     order : 4,
    //     name : 'Prawito'
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/img/icon/favicon.ico" alt=""/>
                        {/* <div className="count">{this.state.order}</div> */}
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} /> */}
                <CardProduct />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);