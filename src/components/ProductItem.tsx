import React from 'react';
import { Product } from '../apis/api';

interface Props {
  product: Product;
}

function ProductItem({
  product: { title, location, updatedAt, price, thumbnail },
}: Props) {
  const now = new Date();
  const elapsed = now.getTime() - updatedAt.getTime();
  return (
    <div className="ProductItem">
      <img className="ProductThumbnail" src={thumbnail} alt={title} />
      <div className="ProductInfo">
        <span className="ProductTitle">{title}</span>
        <span className="ProductLocationAndUpdateAt">
          {location} · {elapsed}초 전
        </span>
        <span className="ProductPrice">{price.toLocaleString()}원</span>
      </div>
    </div>
  );
}

export default ProductItem;
