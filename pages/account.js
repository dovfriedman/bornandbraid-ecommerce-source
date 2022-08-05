import { useUser } from '../context/user';

import PageHeading from '../components/PageHeading';
import SignIn from '../components/SignIn';

function Page() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;
  if (!user) {
    return <SignIn />;
  }

  return (
    <>
      <PageHeading>Account</PageHeading>
    </>
  );
}

export default Page;
