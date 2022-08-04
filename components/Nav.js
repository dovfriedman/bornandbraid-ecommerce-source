import Link from 'next/link';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

import { useUser } from '../context/user';
import { supabase } from '../utils/supabase';

export default function Nav() {
  const { user } = useUser();

  return (
    <nav className='flex'>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/account'}>
        <a>
          <AiOutlineUser size={30} />
        </a>
      </Link>
      <AiOutlineShoppingCart size={30} />
      {user && (
        <button type='button' onClick={async () => await supabase.auth.signOut()}>
          Sign Out
        </button>
      )}
    </nav>
  );
}
