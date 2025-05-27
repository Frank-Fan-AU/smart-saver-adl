import { createClient } from '@/utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>

      <div className="w-screen-full  mx-auto px-4 sm:px-6 lg:px-12">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}
