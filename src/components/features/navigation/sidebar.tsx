'use client'

import { SidebarContext } from '@/components/providers/sidebar-provider'
import { useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiYoutubeshorts, SiYoutubemusic, SiYoutube, SiYoutubestudio, SiYoutubekids } from 'react-icons/si'
import { MdOutlineVideoCameraFront, MdOutlineVideoLibrary, MdSubscriptions } from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'
import { CgPlayList } from 'react-icons/cg'
import { LuClock } from 'react-icons/lu'
import { PiThumbsUp } from 'react-icons/pi'
import { LiaDownloadSolid } from 'react-icons/lia'
import {
  ChevronRight,
  ClapperboardIcon,
  FlagIcon,
  FlameIcon,
  Gamepad2Icon,
  HelpCircleIcon,
  LightbulbIcon,
  MessageCircleWarning,
  Music2Icon,
  NewspaperIcon,
  RadioIcon,
  SearchIcon,
  SettingsIcon,
  TrophyIcon,
} from 'lucide-react'
import Image from 'next/image'
import { AiFillHome } from 'react-icons/ai'
import { cn } from '@/lib/utils'

type SidebarItem = {
  href: string
  icon: React.ReactNode
  label: string
  matchPath: RegExp
}

type ChannelItem = {
  name: string
  image: string
  isLive: boolean
}

const mainItems: SidebarItem[] = [
  {
    href: '/',
    icon: <AiFillHome className="size-5" />,
    label: 'Home',
    matchPath: /^\/$/,
  },
  {
    href: '/shorts',
    icon: <SiYoutubeshorts className="size-5" />,
    label: 'Shorts',
    matchPath: /^\/shorts/,
  },
  {
    href: '/subscriptions',
    icon: <MdSubscriptions className="size-5" />,
    label: 'Subscriptions',
    matchPath: /^\/subscriptions/,
  },
  {
    href: '/music',
    icon: <SiYoutubemusic className="size-5" />,
    label: 'YouTube Music',
    matchPath: /^\/music/,
  },
]

const libraryItems: SidebarItem[] = [
  {
    href: '/you',
    icon: null,
    label: 'You',
    matchPath: /^\/you/,
  },
  {
    href: '/history',
    icon: <FaHistory className="size-4" />,
    label: 'History',
    matchPath: /^\/history/,
  },
  {
    href: '/playlists',
    icon: <CgPlayList className="size-5 scale-125" />,
    label: 'Playlists',
    matchPath: /^\/playlists/,
  },
  {
    href: '/your-videos',
    icon: <MdOutlineVideoCameraFront className="size-5" />,
    label: 'Your videos',
    matchPath: /^\/your-videos/,
  },
  {
    href: '/watch-later',
    icon: <LuClock className="size-5" />,
    label: 'Watch later',
    matchPath: /^\/watch-later/,
  },
  {
    href: '/liked-videos',
    icon: <PiThumbsUp className="size-5" />,
    label: 'Liked videos',
    matchPath: /^\/liked-videos/,
  },
]

const subscriptionItems: SidebarItem[] = [
  {
    href: '/subscriptions',
    icon: null,
    label: 'Subscriptions',
    matchPath: /^\/subscriptions/,
  },
]

const channelItems: ChannelItem[] = [
  {
    name: 'Jhon Doe',
    image: 'https://picsum.photos/seed/007/500/500',
    isLive: true,
  },
  {
    name: 'Jhon Doe',
    image: 'https://picsum.photos/seed/008/500/500',
    isLive: false,
  },
  {
    name: 'Jhon Doe',
    image: 'https://picsum.photos/seed/009/500/500',
    isLive: true,
  },
  {
    name: 'Jhon Doe',
    image: 'https://picsum.photos/seed/010/500/500',
    isLive: false,
  },
]

const exploreItems: SidebarItem[] = [
  {
    href: '/explore',
    icon: null,
    label: 'Explore',
    matchPath: /^\/explore/,
  },
  {
    href: '/trending',
    icon: <FlameIcon className="size-5" />,
    label: 'Trending',
    matchPath: /^\/trending/,
  },
  {
    href: '/music',
    icon: <Music2Icon className="size-5" />,
    label: 'Music',
    matchPath: /^\/music/,
  },
  {
    href: '/movies',
    icon: <ClapperboardIcon className="size-5" />,
    label: 'Movies',
    matchPath: /^\/movies/,
  },
  {
    href: '/live',
    icon: <RadioIcon className="size-5" />,
    label: 'Live',
    matchPath: /^\/live/,
  },
  {
    href: '/gaming',
    icon: <Gamepad2Icon className="size-5" />,
    label: 'Gaming',
    matchPath: /^\/gaming/,
  },
  {
    href: '/news',
    icon: <NewspaperIcon className="size-5" />,
    label: 'News',
    matchPath: /^\/news/,
  },
  {
    href: '/sports',
    icon: <TrophyIcon className="size-5" />,
    label: 'Sports',
    matchPath: /^\/sports/,
  },
  {
    href: '/learning',
    icon: <LightbulbIcon className="size-5" />,
    label: 'Learning',
    matchPath: /^\/learning/,
  },
]

const youtubeItems: SidebarItem[] = [
  {
    href: '/',
    icon: null,
    label: 'More from YouTube',
    matchPath: /^\/more-from-youtube/,
  },
  {
    href: '/studio',
    icon: <SiYoutubestudio className="size-5 text-red-600" />,
    label: 'YouTube Studio',
    matchPath: /^\/studio/,
  },
  {
    href: '/premium',
    icon: <SiYoutube className="size-5 text-red-600" />,
    label: 'YouTube Premium',
    matchPath: /^\/premium/,
  },
  {
    href: '/music',
    icon: <SiYoutubemusic className="size-5 text-red-600" />,
    label: 'YouTube Music',
    matchPath: /^\/music/,
  },
  {
    href: '/kids',
    icon: <SiYoutubekids className="size-5 text-red-600" />,
    label: 'YouTube Kids',
    matchPath: /^\/kids/,
  },
]

const settingsItems: SidebarItem[] = [
  {
    href: '/settings',
    icon: <SettingsIcon className="size-5" />,
    label: 'Settings',
    matchPath: /^\/settings/,
  },
  {
    href: '/report-history',
    icon: <FlagIcon className="size-5" />,
    label: 'Report History',
    matchPath: /^\/report-history/,
  },
  {
    href: '/help',
    icon: <HelpCircleIcon className="size-5" />,
    label: 'Help',
    matchPath: /^\/help/,
  },
  {
    href: '/feedback',
    icon: <MessageCircleWarning className="size-5" />,
    label: 'Send feedback',
    matchPath: /^\/feedback/,
  },
]

const footerLinks: SidebarItem[] = [
  {
    href: '/about',
    icon: null,
    label: 'About',
    matchPath: /^\/about/,
  },
  {
    href: '/press',
    icon: null,
    label: 'Press',
    matchPath: /^\/press/,
  },
  {
    href: '/copyright',
    icon: null,
    label: 'Copyright',
    matchPath: /^\/copyright/,
  },
  {
    href: '/contact',
    icon: null,
    label: 'Contact us',
    matchPath: /^\/contact/,
  },
  {
    href: '/creators',
    icon: null,
    label: 'Creators',
    matchPath: /^\/creators/,
  },
  {
    href: '/advertise',
    icon: null,
    label: 'Advertise',
    matchPath: /^\/advertise/,
  },
  {
    href: '/developers',
    icon: null,
    label: 'Developers',
    matchPath: /^\/developers/,
  },
]

const footerLinks2: SidebarItem[] = [
  {
    href: '/terms',
    icon: null,
    label: 'Terms',
    matchPath: /^\/terms/,
  },
  {
    href: '/privacy',
    icon: null,
    label: 'Privacy',
    matchPath: /^\/privacy/,
  },
  {
    href: '/policy',
    icon: null,
    label: 'Policy & Safety',
    matchPath: /^\/policy/,
  },
  {
    href: '/test',
    icon: null,
    label: 'Test new features',
    matchPath: /^\/test/,
  },
]

export function Sidebar() {
  const { isOpen } = useContext(SidebarContext)
  const pathname = usePathname()

  if (!isOpen) return <div className="size-0" />

  const renderSidebarItems = (items: SidebarItem[]) => (
    <ul className="space-y-1 font-semibold text-sm">
      {items.map((item) => (
        <li
          key={item.href}
          className={cn(
            'hover:bg-secondary rounded-md p-2',
            item.matchPath.test(pathname) && 'bg-secondary',
            !item.icon && 'text-base',
          )}
        >
          <Link href={item.href} className="flex items-center gap-4">
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )

  const renderFooterLinks = (items: SidebarItem[]) => (
    <div className="flex gap-x-2 gap-y-1 flex-wrap text-sm text-muted-foreground font-semibold">
      {items.map((item) => (
        <Link key={item.href} className="hover:underline decoration-2" href={item.href}>
          {item.label}
        </Link>
      ))}
    </div>
  )

  return (
    <>
      <div className="hidden max-sm:block"></div>
      <div className="w-64 min-h-[calc(100dvh-4rem)] overflow-y-auto space-y-4 px-4 pb-4 max-sm:absolute top-16 left-0 z-40 bg-background h-full">
        {renderSidebarItems(mainItems)}
        <hr className="border-1" />
        {renderSidebarItems(libraryItems)}
        <hr className="border-1" />
        {renderSidebarItems(subscriptionItems)}
        <ul className="space-y-1 font-semibold text-sm">
          {channelItems.map((channel, index) => (
            <li key={index} className="hover:bg-secondary rounded-md p-2">
              <Link href="/" className="flex items-center gap-4 relative">
                <Image
                  src={channel.image}
                  alt={channel.name}
                  width={24}
                  height={24}
                  className="rounded-full bg-gray-300 aspect-square object-cover overflow-hidden"
                />
                {channel.name}
                {channel.isLive && (
                  <span className="absolute top-1/2 right-2 bg-blue-500 rounded-full size-1.5 -translate-y-1/2" />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="border-1" />
        {renderSidebarItems(exploreItems)}
        <hr className="border-1" />
        {renderSidebarItems(youtubeItems)}
        <hr className="border-1" />
        {renderSidebarItems(settingsItems)}
        <hr className="border-1" />
        {renderFooterLinks(footerLinks)}
        {renderFooterLinks(footerLinks2)}
        <Link href="/" className="text-sm text-muted-foreground font-light hover:underline">
          &copy; 2025 Google LLC
        </Link>
      </div>
    </>
  )
}
