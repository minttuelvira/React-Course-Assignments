import React, { useState } from 'react';
import ProductSelector from './ProductSelector';
import OrderInfo from './OrderInfo';
import './ComponentUI.css';

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
      
}