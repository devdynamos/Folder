import React, { useState } from 'react';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleImageUpload = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const handleAddProduct = async () => {
    console.log('Button clicked');
  
    try {
      if (!productName || !productPrice) {
        console.error('Please fill in all the required fields.');
        return;
      }
  
      console.log('Sending request...');
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          price: parseFloat(productPrice),
          image: image.raw,
        }),
      });
  
      console.log('Request sent');
  
      const data = await response.json();
  
      console.log('Response received:', data);
  
      if (data.success) {
        console.log(`New product created with the following id: ${data.productId}`);
      } else {
        console.error('Failed to add product:', data.error);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  
  
  
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={handleProductNameChange}
      />
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={handleProductPriceChange}
      />
      <input className="mb-4" type="file" accept="image/*" onChange={handleImageUpload} />
      {image.preview && <img className="mb-4" src={image.preview} alt="Preview" />}
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
}


export default ProductForm;
