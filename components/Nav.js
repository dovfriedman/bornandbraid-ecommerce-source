import Link from 'next/link';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

import { useUser } from '../context/user';
import { supabase } from '../utils/supabase';

export default function Nav() {
  const { user } = useUser();

  return (
    <header className='px-9 pt-9 pb-9 border-b mb-9 flex justify-center'>
      <div className='w-10/12'>
        <div className='grid grid-cols-3 mb-[50px] justify-items-center items-center'>
          <div></div>
          <Link href={'/'}>
            <h1 className='bg-logo bg-no-repeat bg-contain indent-[-9999px] h-[150px] w-[150px] text-center'>
              <a>Born & Braid</a>
            </h1>
          </Link>
          <ul className='flex justify-self-end gap-4'>
            <li>
              <Link href={'/account'}>
                <a>
                  <AiOutlineUser size={20} />
                </a>
              </Link>
            </li>
            <li>
              <AiOutlineShoppingCart size={20} />
            </li>
            {user && (
              <li>
                <button type='button' onClick={async () => await supabase.auth.signOut()}>
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
        <nav>
          <ul className='flex justify-center gap-6'>
            <li>
              <Link href={'/shop'}>
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href={'/local-pickup'}>
                <a>Local Pickup</a>
              </Link>
            </li>
            <li>
              <Link href={'/about-us'}>
                <a>About us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
