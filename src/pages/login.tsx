import LoginForm from '@/components/auth/login-form';
import { useTranslation } from 'next-i18next';
import { getAuthCredentials, isAuthenticated } from '@/utils/auth-utils';
import { useRouter } from 'next/router';
import AuthPageLayout from '@/components/layouts/auth-layout';
import { Routes } from '@/config/routes';

export default function LoginPage() {
  const router = useRouter();
  const { permissions } = getAuthCredentials();
  if (isAuthenticated({ permissions })) {
    router.replace(Routes.dashboard);
  }
  const { t } = useTranslation('common');

  return (
    <AuthPageLayout>
      <LoginForm />
    </AuthPageLayout>
  );
}
