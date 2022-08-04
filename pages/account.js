import { useUser } from '../context/user';

import PageHeader from '../components/PageHeader';
import SignIn from '../components/SignIn';

function Page() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (!user) {
    return <SignIn />;
  }

  return (
    <>
      <PageHeader>Account</PageHeader>
    </>
  );
}

export default Page;
