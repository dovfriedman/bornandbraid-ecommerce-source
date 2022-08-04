import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabase';
import { useRouter } from 'next/router';
// import axios from 'axios';

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log({ user });

  useEffect(() => {
    const getUser = async () => {
      const sessionUser = await supabase.auth.user();

      if (sessionUser) {
        setUser(sessionUser);
      }

      setIsLoading(false);
    };

    getUser();

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      switch (event) {
        case 'SIGNED_OUT':
          setUser(null);
          setAccessToken(null);
          break;
        case 'SIGNED_IN':
          setUser(session.user);
          setAccessToken(session.access_token);
          router.push('/account');
          break;
        default:
          break;
      }
    });
  }, []);

  const value = {
    accessToken,
    error,
    isLoading,
    user,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
