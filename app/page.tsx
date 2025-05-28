import { createClient } from '@/utils/supabase/server';
import {
  getUser
} from '@/utils/supabase/queries';
import SearchBar from '@/components/ui/SearchBar';
import PriceComparisonTable from '@/components/ui/PriceComparisonTable';
import Receipt from '@/components/ui/Receipt';
import MultiReceipt from '@/components/ui/MultiReceipt';

const exampleData = [
  {
    product: "Milk (2L)",
    colesPrice: 3.50,
    woolworthsPrice: 3.60,
    timesPrice: 3.40
  },
  {
    product: "Bread (White)",
    colesPrice: 2.80,
    woolworthsPrice: 2.90,
    timesPrice: 2.70
  },
  {
    product: "Eggs (12 pack)",
    colesPrice: 5.50,
    woolworthsPrice: 5.40,
    timesPrice: 5.30
  },
  {
    product: "Bananas (1kg)",
    colesPrice: 3.90,
    woolworthsPrice: 3.80,
    timesPrice: 3.70
  }
];

const colesProducts = [
  { name: "Milk (2L)", price: 3.50 },
  { name: "Bread (White)", price: 2.80 },
  { name: "Eggs (12 pack)", price: 5.50 },
  { name: "Bananas (1kg)", price: 3.90 }
];

const woolworthsProducts = [
  { name: "Milk (2L)", price: 3.60 },
  { name: "Bread (White)", price: 2.90 },
  { name: "Eggs (12 pack)", price: 5.40 },
  { name: "Bananas (1kg)", price: 3.80 }
];

const timesProducts = [
  { name: "Milk (2L)", price: 3.40 },
  { name: "Bread (White)", price: 2.70 },
  { name: "Eggs (12 pack)", price: 5.30 },
  { name: "Bananas (1kg)", price: 3.70 }
];

const allReceipts = [
  {
    storeName: "Coles",
    products: colesProducts
  },
  {
    storeName: "Woolworths",
    products: woolworthsProducts
  },
  {
    storeName: "Times",
    products: timesProducts
  }
];

export default async function PricingPage() {
  const supabase = createClient();
  const [user] = await Promise.all([
    getUser(supabase),
  ]);

  return (
    <div className="min-h-screen w-full flex p-4 flex-col items-center">
      <div className="w-full max-w-6xl">
        <SearchBar />
      </div>
      <div className='w-full max-w-6xl flex flex-col items-center mt-10'>
        <h1 className='text-4xl font-bold'>Save money on your groceries</h1>
        <p className='text-lg text-center mt-4'>SmartSaver helps you find the cheapest supermarket for each product, potentially saving you $5 - $10 per week by splitting your shopping across multiple stores.</p>
      </div>
      <div className='w-full max-w-6xl mt-10'>
        <h1 className='text-3xl font-bold text-left'>Example Comparisons</h1>
        <div className="mt-6">
          <PriceComparisonTable data={exampleData} />
        </div>
      </div>
      <div className='w-full max-w-6xl mt-10'>
        <h1 className='text-3xl font-bold text-left'>ShoppingList Example</h1>
        <div className="w-full max-w-6xl mt-10 flex gap-4">
          <Receipt storeName="Coles" products={colesProducts} />
          <Receipt storeName="Woolworths" products={woolworthsProducts} />
          <Receipt storeName="Times" products={timesProducts} />
          <MultiReceipt receipts={allReceipts} />
        </div>
        <h1 className='text-3xl text-white font-bold text-left mt-10'>see, you can save $10 in this shopping</h1>
      </div>

    </div>
  );
}
