'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { MicIcon, MoonIcon, SunIcon, UserCircleIcon, BellIcon, MenuIcon, SearchIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { SidebarContext } from '@/components/providers/sidebar-provider'

export function Topbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const { toggleSidebar } = useContext(SidebarContext)

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  return (
    <div className="flex gap-2 items-center justify-between px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-background min-h-16">
      <div className="flex gap-2 items-center w-fit">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <MenuIcon className="size-4" />
        </Button>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Youtube"
            width={100}
            height={32}
            className="block dark:hidden max-w-none max-xs:hidden!"
          />
          <Image
            src="/logo-dark.svg"
            alt="Youtube"
            width={100}
            height={32}
            className="hidden dark:block max-w-none max-xs:hidden!"
          />
          <Image src="/logo-small.svg" alt="Youtube" width={32} height={32} className="xs:hidden" />
        </Link>
      </div>

      <div className="flex gap-2 items-center max-sm:hidden">
        <Input type="text" placeholder="Search" className="rounded-full min-w-none w-full md:w-96 bg-transparent!" />
        <Button variant="ghost" size="icon">
          <MicIcon className="size-4" />
        </Button>
      </div>

      <div className="flex gap-2 items-center">
        <Button variant="ghost" size="icon" className="sm:hidden">
          <SearchIcon className="size-4" />
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          <MoonIcon className="size-4 dark:block hidden" />
          <SunIcon className="size-4 block dark:hidden" />
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="size-4" />
          <span className="absolute top-1.5 right-2 size-2 bg-primary rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon">
          <Image
            src="/placeholder.png"
            alt="Jhon Doe"
            width={24}
            height={24}
            className="rounded-full bg-gray-300 aspect-square object-cover overflow-hidden"
          />
        </Button>
      </div>
    </div>
  )
}
