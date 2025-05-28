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

interface MultiReceiptProps {
  receipts: StoreReceipt[];
  className?: string;
}

export default function MultiReceipt({ receipts, className = '' }: MultiReceiptProps) {




  // 计算每个商店的总价
  const storeTotals = receipts.map(receipt => ({
    storeName: receipt.storeName,
    total: receipt.products.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0)
  }));

  // 计算所有商店的总价
  const grandTotal = storeTotals.reduce((sum, store) => sum + store.total, 0);

  return (
    <>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #282f27;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424F40;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #A6B2A3;
        }
      `}</style>
      <div className={`w-1/4 h-[400px] bg-brand-300 rounded-lg p-4 flex flex-col ${className}`}>
        {/* 顶部锯齿 */}
        <div className="flex justify-between mb-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1 h-2 bg-gray-200 rounded-full"></div>
          ))}
        </div>

        {/* 标题 */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Shopping List Summary</h2>
        </div>



        {/* 商店列表 */}
        <div className="flex-grow overflow-y-auto custom-scrollbar">
          {receipts.map((receipt, storeIndex) => (
            <div key={storeIndex} className="mb-4">
              <h3 className="font-semibold mb-2">{receipt.storeName}</h3>
              {receipt.products.map((product, productIndex) => (
                <div key={productIndex} className="mb-1 ml-2">
                  <div className="flex justify-between text-sm">
                    <span>{product.name}</span>
                    <span>${(product.price * (product.quantity || 1)).toFixed(2)}</span>
                  </div>
                  {product.quantity && product.quantity > 1 && (
                    <div className="text-xs text-gray-500 flex justify-between">
                      <span>${product.price.toFixed(2)} x {product.quantity}</span>
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-dashed border-gray-300 my-2"></div>
              <div className="flex justify-between text-sm font-semibold">
                <span>{receipt.storeName} Total</span>
                <span>${storeTotals[storeIndex].total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 总计 */}
        <div className="border-t border-dashed border-gray-300 my-2"></div>
        <div className="flex justify-between font-bold">
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
    </>
  );
} 