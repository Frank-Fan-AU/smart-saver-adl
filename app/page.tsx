import { createClient } from '@/utils/supabase/server';
import {
  getUser
} from '@/utils/supabase/queries';


export default async function PricingPage() {
  const supabase = createClient();
  const [user] = await Promise.all([
    getUser(supabase),
  ]);

  return (
    <div>

    </div>
  );
}
