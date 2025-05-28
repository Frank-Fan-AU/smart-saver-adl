'use client';

interface PriceComparison {
  product: string;
  colesPrice: number;
  woolworthsPrice: number;
  timesPrice: number;
}

interface PriceComparisonTableProps {
  data: PriceComparison[];
}

export default function PriceComparisonTable({ data }: PriceComparisonTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-brand-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Product</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Coles Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Woolworths Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">Times Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-300 bg-brand-400">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-brand-200">
              <td className="px-6 py-4 text-sm text-white">{item.product}</td>
              <td className="px-6 py-4 text-sm text-white">${item.colesPrice.toFixed(2)}</td>
              <td className="px-6 py-4 text-sm text-white">${item.woolworthsPrice.toFixed(2)}</td>
              <td className="px-6 py-4 text-sm text-white">${item.timesPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 