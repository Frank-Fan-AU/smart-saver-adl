import { createClient } from '@/utils/supabase/server';
import {
  getUser
} from '@/utils/supabase/queries';
import SearchBar from '@/components/ui/SearchBar';

export default async function PricingPage() {
  const supabase = createClient();
  const [user] = await Promise.all([
    getUser(supabase),
  ]);

  return (
    <div className="min-h-screen w-full flex justify-center p-4">
      <div className="w-full max-w-6xl">
        <SearchBar />
      </div>
    </div>
  );
}
