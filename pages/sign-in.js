import { useState } from 'react';
import Link from 'next/link';

import { useUser } from '../context/user';

export default function SignUp() {
  const { signIn } = useUser();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, session, error } = await signIn(email, password);

      console.log(user, session);

      if (error) throw error;

      console.log('signed in');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Your password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button disabled={loading}>Sign Up</button>
        </form>
        Dont have an account?{' '}
        <Link href={'/sign-up'}>
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
