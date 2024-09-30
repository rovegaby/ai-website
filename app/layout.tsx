import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '@/contexts/AuthContext'

// Remove unused imports
// import Link from 'next/link'
// import ThemeToggle from '@/components/theme-toggle'
// import LogoutButton from '@/components/logout-button'
// import LanguageSwitch from '@/components/language-switch'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className="h-full">
      <body className={`${inter.className} flex flex-col h-full text-sm`}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
