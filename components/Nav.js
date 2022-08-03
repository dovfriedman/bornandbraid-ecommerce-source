import Link from 'next/link';

import { useUser } from '../context/user';

export default function Nav() {
  const { signOut } = useUser();

  return (
    <nav>
      <button type='button' onClick={signOut}>
        Sign Out
      </button>
      <Link href={'/sign-in'}>
        <a>Sign In</a>
      </Link>
    </nav>
  );
}
