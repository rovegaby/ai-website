"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface from "@/components/ChatInterface";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function AIChatPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const t = useTranslations('aiChat');
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (!loggedIn) {
      router.push(`/${locale}/login`);
    }
  }, [router, locale]);

  if (!isLoggedIn) {
    return null; // 或者返回一个加载指示器
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <div className="relative">
        <ChatInterface />
      </div>
    </div>
  );
}