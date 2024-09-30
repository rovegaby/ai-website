import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import LogoutButton from '@/components/LogoutButton'
import LanguageSwitch from '@/components/LanguageSwitch'
import { useTranslations } from 'next-intl'

export default function Template({ children }: { children: React.ReactNode }) {
  const t = useTranslations('nav');

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('home')}</Link></li>
            <li><Link href="/ai-chat" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('aiChat')}</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <LogoutButton />
            <ThemeToggle />
            <LanguageSwitch />
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-3 text-xs">
        <p className="text-gray-600 dark:text-gray-400">{t('footer')} <a 
            href="https://blog.ilixiang.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Shawn Lee
          </a></p>
      </footer>
    </>
  )
}