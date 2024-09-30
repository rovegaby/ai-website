"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatInterface from "@/components/ChatInterface";

export default function AIChatPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (!loggedIn) {
      router.push('/login');
    }
  }, [router]);

  if (!isLoggedIn) {
    return null; // 或者返回一个加载指示器
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Intelligent Assistant</h1> {/* 调整 text-3xl mb-6 为 text-2xl mb-4 */}
      <div className="relative">
        <ChatInterface />
      </div>
    </div>
  );
}