import React from 'react';

const products = [
    { name: 'AMD Ryzen 5 7600', price: 200 },
    { name: 'AMD Ryzen 9 9950X', price: 690 },
    { name: 'AMD Ryzen 5 3600', price: 85 },
  ];


  const ProductSelector = ({ selectedProduct, quantity, onProductChange, onQuantityChange }) => {

    return (
        <div className="product-selector">
          <h2>Select product</h2>
          <div className="form-group">
            <label>Product: </label>
            <select
              value={selectedProduct.name}
              onChange={(e) =>
                onProductChange(products.find((p) => p.name === e.target.value))
              }
            >
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name} ({product.price}€)
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }     