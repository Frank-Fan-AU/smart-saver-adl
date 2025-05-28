'use client';

interface Product {
  name: string;
  price: number;
  quantity?: number;
}

interface StoreReceipt {
  storeName: string;
  products: Product[];
}

interface PopupShoppingListProps {
  receipts: StoreReceipt[];
}

export default function PopupShoppingList({ receipts }: PopupShoppingListProps) {
  // 计算每个商店的总价
  const storeTotals = receipts.map(receipt => ({
    storeName: receipt.storeName,
    total: receipt.products.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0)
  }));

  // 计算所有商店的总价
  const grandTotal = storeTotals.reduce((sum, store) => sum + store.total, 0);

  return (
    <div className="bg-brand-300 rounded-lg flex flex-col w-[400px]">
      {/* 顶部锯齿 */}
      <div className="flex justify-between mb-2">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1 h-2 bg-gray-200 rounded-full"></div>
        ))}
      </div>

      {/* 标题 */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-white">Shopping List</h2>
      </div>

      {/* 商店列表 */}
      <div className="flex-grow overflow-y-auto max-h-[400px] custom-scrollbar">
        {receipts.map((receipt, storeIndex) => (
          <div key={storeIndex} className="mb-4">
            <h3 className="font-semibold mb-2 text-white">{receipt.storeName}</h3>
            {receipt.products.map((product, productIndex) => (
              <div key={productIndex} className="mb-1 ml-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">{product.name}</span>
                  <span className="text-white">${(product.price * (product.quantity || 1)).toFixed(2)}</span>
                </div>
                {product.quantity && product.quantity > 1 && (
                  <div className="text-xs text-gray-300 flex justify-between">
                    <span>${product.price.toFixed(2)} x {product.quantity}</span>
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-dashed border-gray-300 my-2"></div>
            <div className="flex justify-between text-sm font-semibold text-white">
              <span>{receipt.storeName} Total</span>
              <span>${storeTotals[storeIndex].total.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 总计 */}
      <div className="border-t border-dashed border-gray-300 my-2"></div>
      <div className="flex justify-between font-bold text-white">
        <span>Grand Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      {/* 底部锯齿 */}
      <div className="flex justify-between mt-2">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1 h-2 bg-gray-200 rounded-full"></div>
        ))}
      </div>
    </div>
  );
} 