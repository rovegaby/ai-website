"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import ShimmerButton from './ui/shimmer-button';

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  return (
    <ShimmerButton
      onClick={toggleLanguage}
      className="px-3 py-1 text-xs font-medium"
      background="linear-gradient(to right, #3b82f6, #8b5cf6)"
    >
      {locale === 'en' ? '中文' : 'English'}
    </ShimmerButton>
  );
}