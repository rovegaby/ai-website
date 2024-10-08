"use client";

import { useRouter } from 'next/navigation';
import ShimmerButton from './ui/shimmer-button';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslations } from 'next-intl';

export default function LogoutButton() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const t = useTranslations('Common');

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <ShimmerButton
      onClick={handleLogout}
      className="px-3 py-1 text-xs font-medium"
      background="linear-gradient(to right, #ef4444, #dc2626)"
    >
      {t('logout')}
    </ShimmerButton>
  );
}