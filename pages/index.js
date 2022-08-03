import { useState, useEffect } from 'react';

import { supabase } from '../utils/supabase';

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
