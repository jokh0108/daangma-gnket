import React from 'react';
import { IoChatbubblesOutline, IoHeartOutline } from 'react-icons/io5';
import { Product } from '../apis/api';

interface Props {
  product: Product;
}

function ProductItem({
  product: { title, location, updatedAt, price, thumbnail, chats, likes },
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
        <div className="ProductInteractions">
          {chats > 0 && (
            <span className="ProductLike">
              <IoHeartOutline />
              {chats}
            </span>
          )}
          {likes > 0 && (
            <span className="ProductChat">
              <IoChatbubblesOutline />
              {likes}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
