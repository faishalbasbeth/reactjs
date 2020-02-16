import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img className="img-size" src="https://etanee.id/img/content/img_sayur.jpg" alt=""/>
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                    <p className="product-price">Rp. 410,000</p>
                    {/* <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/> */}
                    <Counter />          
                </div>
        );
    }
}

export default CardProduct;