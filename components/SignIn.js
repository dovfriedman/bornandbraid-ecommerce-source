import { useState } from 'react';
import Link from 'next/link';

import { supabase } from '../utils/supabase';

import PageHeader from './PageHeader';

function Component() {
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      return setError(error.message);
    }

    setError();
  };

  return (
    <>
      <PageHeader>Sign In</PageHeader>
      <form onSubmit={handleSubmit}>
        <input type='email' placeholder='Your email' value={email} onChange={e => setEmail(e.target.value)} />
        <input
          type='password'
          placeholder='Your password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign In</button>
      </form>
      <div>{error}</div>
      <Link href={'/register'}>
        <a>Create an account</a>
      </Link>
    </>
  );
}

export default Component;
