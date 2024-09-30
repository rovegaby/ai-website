import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = '企业网站' }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white">
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">首页</Link></li>
            <li><Link href="/about" className="hover:underline">关于我们</Link></li>
            <li><Link href="/products" className="hover:underline">产品服务</Link></li>
            <li><Link href="/news" className="hover:underline">新闻动态</Link></li>
            <li><Link href="/contact" className="hover:underline">联系我们</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-200">
        <div className="container mx-auto px-4 py-6 text-center">
          © {new Date().getFullYear()} 企业网站. All rights reserved.
        </div>
      </footer>
    </div>
  )
}