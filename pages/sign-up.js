import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '../context/user';

export default function SignUp() {
  const { signUp } = useUser();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, session, error } = await signUp(email, password);
      console.log(user);

      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Full name
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
          </label>

          <label>
            Email
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
          </label>

          <label>
            Password
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          </label>

          <button>Sign Up</button>
        </form>
        Already have an account?{' '}
        <Link href={'/sign-in'}>
          <a>Sign In</a>
        </Link>
      </div>
    </div>
  );
}
