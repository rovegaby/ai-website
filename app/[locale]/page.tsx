"use client";

import LetterPullup from "@/components/ui/letter-pullup";
import ShimmerButton from "@/components/ui/shimmer-button";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string;

  const handleStartChat = () => {
    if (isLoggedIn) {
      router.push(`/${locale}/ai-chat`);
    } else {
      router.push(`/${locale}/login`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      <LetterPullup words={t('title')} className="text-3xl font-bold mb-4 dark:text-white" />
      <p className="text-base mb-6 text-center max-w-2xl dark:text-gray-300">
        {t('description')}
      </p>
      <ShimmerButton
        onClick={handleStartChat}
        className="px-6 py-2 text-base font-semibold"
        background="linear-gradient(to right, #3b82f6, #8b5cf6)"
      >
        {isLoggedIn ? t('startChat') : t('loginAndStartChat')}
      </ShimmerButton>
    </div>
  );
}