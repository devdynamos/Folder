import React from 'react';

const ProductList = ({ products }) => {
 return (
  <div className="p-6">
 <div className="w-[1200px] mx-auto">
    <h1 className="text-4xl font-bold mb-4">Your Header Here</h1>
    <div className="grid grid-cols-2 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border rounded-lg shadow-md w-full h-full">
          <img className="h-48 w-full object-cover" src={product.image} alt={product.name} />
          <h2 className="text-2xl font-bold mt-2">{product.name}</h2>
          <p className="mt-1 text-gray-500">${product.price}</p>
        </div>
      ))}
    </div>
 </div>
</div>
);}

export default ProductList;
