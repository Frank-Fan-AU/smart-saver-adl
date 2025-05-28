

interface Product {
  name: string;
  price: number;
  quantity?: number;
}

interface ReceiptProps {
  storeName: string;
  products: Product[];
  className?: string;
}

export default function Receipt({ storeName, products, className = '' }: ReceiptProps) {

  const total = products.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);


  return (
    <div className={`w-1/4 h-[400px] bg-brand-300 rounded-lg p-4 flex flex-col ${className}`}>
      {/* 顶部锯齿 */}
      <div className="flex justify-between mb-2">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1 h-2 bg-gray-200 rounded-full"></div>
        ))}
      </div>

      {/* 商店名称 */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{storeName}</h2>
       
      </div>

      {/* 商品列表 */}
      <div className="flex-grow overflow-y-auto">
        {products.map((product, index) => (
          <div key={index} className="mb-2">
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
      </div>

      {/* 分隔线 */}
      <div className="border-t border-dashed border-gray-300 my-2"></div>

      {/* 总计 */}
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
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