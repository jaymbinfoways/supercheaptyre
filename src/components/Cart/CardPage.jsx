import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import { cartData as initialCartData } from './mock';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const raw = localStorage.getItem('cartItems');
    return raw ? JSON.parse(raw) : [];
  });
  const [totals, setTotals] = useState({ subtotal: 0, discount: 0, delivery: 15, total: 0 });

  useEffect(() => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.20;
    const delivery = 15;
    const total = subtotal - discount + delivery;
    setTotals({ subtotal, discount, delivery, total });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', String(cartItems.reduce((s, it) => s + (it.quantity || 1), 0)));
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8 py-5">
      <h1 className="font-lexend font-medium text-3xl text-primary mb-7 px-3">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-border-gray p-6 space-y-6">
            {cartItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <CartItem
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                />
                {index < cartItems.length - 1 && <hr className="border-border-gray" />}
              </React.Fragment>
            ))}
            <hr className="border-border-gray" />
            <button onClick={() => navigate('/tyres')} className="w-full bg-primary text-white font-lexend font-semibold text-xl py-4 rounded-lg hover:bg-red-700 transition-colors">
              Add Another Product
            </button>
          </div>
        </div>
        <div className="lg:col-span-1">
          <OrderSummary totals={totals} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
