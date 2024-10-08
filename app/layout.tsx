import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '@/contexts/AuthContext'
import { NextIntlClientProvider } from 'next-intl'

// Remove unused imports
// import Link from 'next/link'
// import ThemeToggle from '@/components/theme-toggle'
// import LanguageSwitch from '@/components/language-switch'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    // 如果没有找到对应的语言文件，可以使用默认语言或者抛出错误
    console.error('Failed to load messages', error);
    messages = (await import(`../messages/en.json`)).default;
  }

  return (
    <html lang={locale} className="h-full">
      <body className={`${inter.className} flex flex-col h-full text-sm`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <header>
               
              </header>
              {children}
            </ThemeProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
