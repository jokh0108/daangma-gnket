import React from 'react';
import { IoChatbubblesOutline, IoHeartOutline } from 'react-icons/io5';
import { Product } from '../apis/api';
import CustomLink from './CustomLink';

interface Props {
  product: Product;
}

function ProductItem({
  product: { id, title, location, updatedAt, price, thumbnail, chats, likes },
}: Props) {
  const now = new Date();
  const elapsed = Math.floor((now.getTime() - updatedAt.getTime()) / 1000);
  return (
    <CustomLink className="ProductItem" to={`/products/${id}`}>
      <img className="ProductThumbnail" src={thumbnail} alt={title} />
      <div className="ProductInfo">
        <span className="ProductTitle">{title}</span>
        <span className="ProductLocationAndUpdateAt">
          {/* TODO: 시간 변환 유틸 함수 작성 */}
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
    </CustomLink>
  );
}

export default ProductItem;
