"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ShimmerButton from '@/components/ui/shimmer-button';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslations } from 'next-intl';

const CORRECT_USERNAME = 'root';
const CORRECT_PASSWORD = 'root123';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();
  const t = useTranslations('login');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      // Login successful
      login();
      router.push('/ai-chat');
    } else {
      // Login failed
      setError(t('incorrectCredentials'));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center dark:text-white">{t('title')}</h2>
        {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
        <div className="mb-3">
          <label htmlFor="username" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('username')}
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('password')}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <ShimmerButton type="submit" className="w-full text-sm">
          {t('loginButton')}
        </ShimmerButton>
      </form>
    </div>
  );
}