import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Topbar } from '@/components/features/navigation/topbar'
import { Sidebar } from '@/components/features/navigation/sidebar'
import { SidebarProvider } from '@/components/shared/sidebar-provider'

const _roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Youtube',
  description: 'Next.js 15, Shadcn UI, Tailwind CSS, TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <Topbar />
            <div className="grid grid-cols-[auto_1fr] min-h-screen pt-16">
              <Sidebar />
              {children}
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
