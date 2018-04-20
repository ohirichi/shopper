import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../store';


class ProductPage extends Component {
  render() {
    const productId = +this.props.match.params.productId;

    const products = this.props.products;
    let product = products.filter(oneProduct => {
      return oneProduct.id == productId
    });
    product = product[0];
    return product ? <div className="productPage">
        <div className="imgBox">{/* <img></img> */}</div>
        <div className="contentBox">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
        <div>
          <button value={productId} onClick={this.props.addItemToCart}>
            Add to cart
          </button>
        </div>
      </div> : <div className="alert">No product to display</div>;
  }
}

const mapStateToProps = state => {
  return { 
    products: state.products 
  };
};


const mapDispatchToProps = dispatch => {
  return {
    addItemToCart(evt){
      evt.preventDefault();
      console.log(evt.target.value)
      dispatch(addItemToCart(evt.target.value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
