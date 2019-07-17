import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../ducks/productsReducer';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    if (this.props.loading) return <div>Loading...</div>;
    return (
      <div>
        {this.props.products.map(product => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.products;
}

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
