import React from 'react';
import { Card, Image, Name, Description } from './ProductCard.st.js';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
    </Card>
  );
};

export default ProductCard;
