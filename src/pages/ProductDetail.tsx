import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  // TODO: ProductDetail 페이지 UI
  return <div>ProductDetail id #{id}</div>;
}

export default ProductDetail;
