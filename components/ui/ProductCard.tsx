'use client';

import { Plus } from 'lucide-react';

interface Price {
  store: string;
  price: number;
}

interface ProductCardProps {
  name: string;
  image: string;
  prices: Price[];
  category: string;
}

export default function ProductCard({ name, image, prices, category }: ProductCardProps) {
  return (
    <div className="bg-brand-400 rounded-lg overflow-hidden w-[280px]">
      {/* 产品图片 */}
      <div className="relative h-32 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-brand-500/80 text-white px-2 py-1 rounded text-sm">
          {category}
        </div>
      </div>

      {/* 产品信息 */}
      <div className="p-3">
        <h3 className="text-base font-semibold text-white mb-2">{name}</h3>
        
        {/* 价格列表 */}
        <div className="space-y-1.5">
          {prices.map((price, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-sm">{price.store}</span>
                <span className="text-white font-medium text-sm">${price.price.toFixed(2)}</span>
              </div>
              <button
                className="p-1 rounded-full bg-brand-500 hover:bg-brand-600 transition-colors"
                title={`Add to ${price.store} shopping list`}
              >
                <Plus className="h-3.5 w-3.5 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 