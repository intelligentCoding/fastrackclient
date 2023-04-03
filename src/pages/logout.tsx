import { useEffect } from 'react';
import Loader from '@/components/ui/loader/loader';
import { useLogoutMutation } from '@/data/user';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function SignOut() {
  const { mutate: logout } = useLogoutMutation();

  useEffect(() => {
    logout();
  }, []);

  return <Loader text="Logging out" />;
}

export default SignOut;
