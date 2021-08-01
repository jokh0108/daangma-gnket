import React from 'react';
import { products } from '../apis/api';
import generateUid from '../utils/generateUid';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <div className="ProductList">
      {products.map(product => (
        <ProductItem key={generateUid()} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
