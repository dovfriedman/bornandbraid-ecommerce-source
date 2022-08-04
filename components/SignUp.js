import { useState } from 'react';
import Link from 'next/link';

import { supabase } from '../utils/supabase';

import PageHeader from './PageHeader';

function Component() {
  const [error, setError] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      { name }
    );

    if (error) {
      return setError(error.message);
    }

    setError();
  };

  return (
    <>
      <PageHeader>Sign Up</PageHeader>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Your name' value={name} onChange={e => setName(e.target.value)} />
        <input type='email' placeholder='Your email' value={email} onChange={e => setEmail(e.target.value)} />
        <input
          type='password'
          placeholder='Your password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
      Already have an account?{' '}
      <Link href={'/login'}>
        <a>Sign In</a>
      </Link>
    </>
  );
}

export default Component;
