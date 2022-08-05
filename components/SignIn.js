import { useState } from 'react';
import Link from 'next/link';

import { supabase } from '../utils/supabase';

import PageHeading from './PageHeading';

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
    <div className='flex flex-col items-center'>
      <PageHeading>Login</PageHeading>
      <form className='flex flex-col justify-center items-center w-[400px] gap-5' onSubmit={handleSubmit}>
        <input
          className='w-full border border-black py-3 px-4'
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className='w-full border border-black py-3 px-4'
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='w-1/4 border border-black p-2 bg-black text-white'>Sign In</button>
      </form>
      {error && <div>{error}</div>}
      <Link href={'/register'}>
        <a className='mt-2.5 text-sm'>Create an account</a>
      </Link>
    </div>
  );
}

export default Component;
