import React, { useState } from 'react';
import ProductSelector from './ProductSelector';
import OrderInfo from './OrderInfo';
import './ComponentUI.css';
import logo from './pc-photo.png';

const App = () => {

    const [selectedProduct, setSelectedProduct] = useState({ name: 'AMD Ryzen 5 7600', price: 200 });
    const [quantity, setQuantity] = useState(1);

    const handleProductChange = (product) => {
        setSelectedProduct(product);
      };
      
      const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 0) {
          setQuantity(newQuantity);
        }
      };

      return (
        
        <div className="app-container">

          <header>
            <img src={logo} alt="Logo" className="logo" />
            <h1>Welcome to product page!</h1>
          </header>

          <main>
            <ProductSelector
              selectedProduct={selectedProduct}
              quantity={quantity}
              onProductChange={handleProductChange}
              onQuantityChange={handleQuantityChange}
            />
            <OrderInfo selectedProduct={selectedProduct} quantity={quantity} />
          </main>
        </div>
      );
      
      
}

export default App;