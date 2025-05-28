'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import PopupShoppingList from './PopupShoppingList';

// 示例数据
const sampleReceipts = [
  {
    storeName: 'Woolworths',
    products: [
      { name: 'Organic Apples', price: 4.99, quantity: 2 },
      { name: 'Fresh Spinach', price: 2.99, quantity: 1 }
    ]
  },
  {
    storeName: 'Coles',
    products: [
      { name: 'Chicken Breast', price: 12.99, quantity: 1 },
      { name: 'Brown Rice', price: 3.49, quantity: 2 }
    ]
  }
];

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-brand-400 hover:bg-brand-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105 z-50"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>Shopping List</span>
      </button>

      {/* 弹出窗口 */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="relative">
            {/* 小三角形 */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-brand-400 transform rotate-45" />
            
            {/* 购物列表 */}
            <div className="bg-brand-400 rounded-lg shadow-xl">
              <PopupShoppingList receipts={sampleReceipts} />
            </div>
          </div>
        </div>
      )}

      {/* 背景遮罩 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
} 