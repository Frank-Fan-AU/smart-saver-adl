'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';

// 静态分类数据
const categories = [
  { id: 1, name: 'Fruits', icon: '🍎' },
  { id: 2, name: 'Vegetables', icon: '🥬' },
  { id: 3, name: 'Meat', icon: '🥩' },
  { id: 4, name: 'Dairy', icon: '🥛' },
  { id: 5, name: 'Bakery', icon: '🥖' },
  { id: 6, name: 'Snacks', icon: '🍪' },
  { id: 7, name: 'Beverages', icon: '🥤' },
  { id: 8, name: 'Frozen', icon: '❄️' },
];

// 示例产品数据
const sampleProducts = [
  {
    id: 1,
    name: 'Organic Apples',
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Fruits',
    prices: [
      { store: 'Woolworths', price: 4.99 },
      { store: 'Coles', price: 5.49 },
      { store: 'ALDI', price: 3.99 },
    ],
  },
  {
    id: 2,
    name: 'Fresh Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Vegetables',
    prices: [
      { store: 'Woolworths', price: 2.99 },
      { store: 'Coles', price: 2.79 },
      { store: 'ALDI', price: 2.49 },
    ],
  },
  {
    id: 3,
    name: 'Chicken Breast',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'Meat',
    prices: [
      { store: 'Woolworths', price: 12.99 },
      { store: 'Coles', price: 11.99 },
      { store: 'ALDI', price: 10.99 },
    ],
  },
];

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Fruits');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="flex h-screen bg-brand-300">
      {/* 左侧边栏 */}
      <div className="w-64 bg-brand-400 p-4">
        <h2 className="text-xl font-bold mb-4 text-white">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.name
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-200 hover:bg-brand-500/50'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 右侧主内容区 */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* 搜索框 */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* 产品展示区 */}
        <div className="flex flex-wrap gap-3">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              prices={product.prices}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
