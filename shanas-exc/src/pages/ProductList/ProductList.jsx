import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/* Map over the products array to render ProductCard components */}
        {products.map((product) => (
          <div key={product.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
