'use client';

import { useState } from 'react';
import { ShoppingCart, TrendingDown, Store, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  quantity: number;
  prices: {
    woolworths: number;
    coles: number;
    aldi: number;
  };
}

interface OptimalPlan {
  woolworths: Product[];
  coles: Product[];
  aldi: Product[];
  total: number;
}

// 示例数据
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Organic Apples',
    quantity: 2,
    prices: {
      woolworths: 4.99,
      coles: 5.49,
      aldi: 4.79
    }
  },
  {
    id: 2,
    name: 'Chicken Breast',
    quantity: 1,
    prices: {
      woolworths: 12.99,
      coles: 11.99,
      aldi: 10.99
    }
  },
  {
    id: 3,
    name: 'Brown Rice',
    quantity: 2,
    prices: {
      woolworths: 3.49,
      coles: 3.29,
      aldi: 2.99
    }
  }
];

// 计算最优购买方案
function calculateOptimalPlan(products: Product[]) {
  const storeTotals = {
    woolworths: 0,
    coles: 0,
    aldi: 0
  };

  const optimalPlan: OptimalPlan = {
    woolworths: [],
    coles: [],
    aldi: [],
    total: 0
  };

  // 计算每个商店的总价
  products.forEach(product => {
    storeTotals.woolworths += product.prices.woolworths * product.quantity;
    storeTotals.coles += product.prices.coles * product.quantity;
    storeTotals.aldi += product.prices.aldi * product.quantity;

    // 找出最便宜的商店
    const prices = [
      { store: 'woolworths' as const, price: product.prices.woolworths },
      { store: 'coles' as const, price: product.prices.coles },
      { store: 'aldi' as const, price: product.prices.aldi }
    ];
    const cheapest = prices.reduce((min, curr) => 
      curr.price < min.price ? curr : min
    );

    // 将商品添加到最优方案中
    optimalPlan[cheapest.store].push(product);
    optimalPlan.total += cheapest.price * product.quantity;
  });

  return {
    storeTotals,
    optimalPlan
  };
}

export default function ShoppingList() {
  const { storeTotals, optimalPlan } = calculateOptimalPlan(sampleProducts);

  // 计算当前显示的总价（默认显示 Woolworths 的价格）
  const currentTotal = sampleProducts.reduce((sum, product) => 
    sum + (product.prices.woolworths * product.quantity), 0
  );

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2 text-foreground">
            <ShoppingCart className="h-8 w-8 text-brand-600" />
            My Shopping List
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：购物清单 */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Shopping Items</h2>
              <div className="space-y-4">
                {sampleProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                        <Store className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">${(product.prices.woolworths * product.quantity).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">Woolworths</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 当前选择的总价 */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">Current Selection Total</h3>
                  <p className="text-2xl font-bold text-brand-600">${currentTotal.toFixed(2)}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Based on Woolworths prices</p>
              </div>
            </div>
          </div>

          {/* 右侧：价格比较和建议 */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                <TrendingDown className="h-5 w-5 text-brand-600" />
                Price Comparison
              </h2>

              {/* 各商店总价 */}
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2 text-foreground">If you shop at Woolworths</h3>
                  <p className="text-2xl font-bold text-brand-600">${storeTotals.woolworths.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {storeTotals.woolworths > currentTotal ? 'More expensive' : 'Same as current selection'}
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2 text-foreground">If you shop at Coles</h3>
                  <p className="text-2xl font-bold text-brand-600">${storeTotals.coles.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {storeTotals.coles > currentTotal ? 'More expensive' : 'Could save $' + (currentTotal - storeTotals.coles).toFixed(2)}
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2 text-foreground">If you shop at Aldi</h3>
                  <p className="text-2xl font-bold text-brand-600">${storeTotals.aldi.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {storeTotals.aldi > currentTotal ? 'More expensive' : 'Could save $' + (currentTotal - storeTotals.aldi).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* 最优购买建议 */}
              <div className="bg-brand-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-brand-800">Smart Shopping Plan</h3>
                <p className="text-2xl font-bold text-brand-600 mb-4">
                  ${optimalPlan.total.toFixed(2)}
                </p>
                <p className="text-sm text-brand-800 mb-4">
                  Save ${(currentTotal - optimalPlan.total).toFixed(2)} by shopping at different stores
                </p>
                <div className="space-y-2">
                  {Object.entries(optimalPlan).map(([store, items]) => {
                    if (store === 'total') return null;
                    if (!Array.isArray(items) || items.length === 0) return null;
                    return (
                      <div key={store} className="flex items-center gap-2 text-sm text-brand-800">
                        <Store className="h-4 w-4 text-brand-600" />
                        <span className="capitalize">{store}</span>
                        <ArrowRight className="h-4 w-4 text-brand-400" />
                        <span>{items.length} items</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 