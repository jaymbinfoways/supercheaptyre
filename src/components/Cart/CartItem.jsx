import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-shrink-0 w-full sm:w-32 h-32 bg-black rounded-lg flex items-center justify-center">
        <img src={item.image} alt={item.name} className="w-28 h-28 object-contain" />
      </div>
      <div className="flex-grow flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-lexend text-xl">{item.name}</h3>
            <p className="font-lexend text-sm mt-1">Size: {item.size}</p>
            <p className="font-roboto text-medium-gray text-base">{item.description}</p>
          </div>
          <p className="font-satoshi font-bold text-2xl mt-2 sm:mt-0">${item.price}</p>
        </div>
        <div className="flex flex-col justify-between items-start sm:items-end">
          <button onClick={() => onRemove(item.id)} className="text-primary hover:text-red-700">
            <Trash2 size={24} />
          </button>
          <div className="flex items-center gap-5 bg-[#F0F0F0] rounded-full px-5 py-3 mt-2">
            <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} className="text-black">
              <Minus size={20} />
            </button>
            <span className="font-satoshi font-medium text-sm w-4 text-center">{item.quantity}</span>
            <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="text-black">
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
