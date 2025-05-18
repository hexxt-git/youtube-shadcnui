'use client'

import { SidebarContext } from '@/components/shared/sidebar-provider'
import { useContext } from 'react'
import Link from 'next/link'
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
  SettingsIcon,
  TrophyIcon,
} from 'lucide-react'
import Image from 'next/image'

export function Sidebar() {
  const { isOpen } = useContext(SidebarContext)

  if (!isOpen) return null

  return (
    <div className="w-64 h-[calc(100dvh-4rem)] overflow-y-auto space-y-4 px-4 pb-4">
      <ul className="space-y-1 font-semibold text-sm">
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutube className="size-5" />
            Home
          </Link>
        </li>
        <li className="bg-secondary hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutubeshorts className="size-5" />
            Shorts
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <MdSubscriptions className="size-5" />
            Subscriptions
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutubemusic className="size-5" />
            YouTube Music
          </Link>
        </li>
      </ul>
      <hr className="border-1" />
      <ul className="space-y-1 font-semibold text-sm">
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="text-base flex items-center gap-2">
            You <ChevronRight className="size-4" />
          </Link>
        </li>
        {/* <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <MdOutlineVideoLibrary className="size-5" />
            Your Chanel
          </Link>
        </li> */}
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <FaHistory className="size-4" />
            History
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <CgPlayList className="size-5 scale-125" />
            Playlists
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <MdOutlineVideoCameraFront className="size-5" />
            Your videos
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <LuClock className="size-5" />
            Watch later
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <PiThumbsUp className="size-5" />
            Liked videos
          </Link>
        </li>
        {/* <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <LiaDownloadSolid className="size-5" />
            Downloads
          </Link>
        </li> */}
      </ul>
      <hr className="border-1" />
      <ul className="space-y-1 font-semibold text-sm">
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="text-base flex items-center gap-2">
            Subscriptions
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4 relative">
            <Image
              src="/placeholder.png"
              alt="Jhon Doe"
              width={24}
              height={24}
              className="rounded-full bg-gray-300 aspect-square object-cover overflow-hidden"
            />
            Jhon Doe
            <span className="absolute top-1/2 right-2 bg-blue-500 rounded-full size-1.5 -translate-y-1/2" />
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4 relative">
            <Image
              src="/placeholder.png"
              alt="Jhon Doe"
              width={24}
              height={24}
              className="rounded-full bg-gray-300 aspect-square object-cover overflow-hidden"
            />
            Jhon Doe
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4 relative">
            <Image
              src="/placeholder.png"
              alt="Jhon Doe"
              width={24}
              height={24}
              className="rounded-full bg-gray-300 aspect-square object-cover overflow-hidden"
            />
            <span className="absolute top-1/2 right-2 bg-blue-500 rounded-full size-1.5 -translate-y-1/2" />
            Jhon Doe
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4 relative">
            <Image
              src="/placeholder.png"
              alt="Jhon Doe"
              width={24}
              height={24}
              className="rounded-full bg-gray-300 aspect-square object-cover overflow-hidden"
            />
            Jhon Doe
          </Link>
        </li>
      </ul>
      <hr className="border-1" />{' '}
      <ul className="space-y-1 font-semibold text-sm">
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="text-base flex items-center gap-2">
            Explore
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <FlameIcon className="size-5" />
            Trending
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <Music2Icon className="size-5" />
            Music
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <ClapperboardIcon className="size-5" />
            Movies
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <RadioIcon className="size-5" />
            Live
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <Gamepad2Icon className="size-5" />
            Gaming
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <NewspaperIcon className="size-5" />
            News
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <TrophyIcon className="size-5" />
            Sports
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <LightbulbIcon className="size-5" />
            Learning
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <TrophyIcon className="size-5" />
            Sports
          </Link>
        </li>
      </ul>
      <hr className="border-1" />
      <ul className="space-y-1 font-semibold text-sm">
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="text-base flex items-center gap-2">
            More from YouTube
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutubestudio className="size-5 text-red-600" />
            YouTube Studio
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutube className="size-5 text-red-600" />
            YouTube Premium
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutubemusic className="size-5 text-red-600" />
            YouTube Music
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SiYoutubekids className="size-5 text-red-600" />
            YouTube Kids
          </Link>
        </li>
      </ul>
      <hr className="border-1" />
      <ul className="space-y-1 font-semibold text-sm">
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <SettingsIcon className="size-5" />
            Settings
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <FlagIcon className="size-5" />
            Report History
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <HelpCircleIcon className="size-5" />
            Help
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-2">
          <Link href="/" className="flex items-center gap-4">
            <MessageCircleWarning className="size-5" />
            Send feedback
          </Link>
        </li>
      </ul>
      <hr className="border-1" />
      <div className="flex gap-x-2 gap-y-1 flex-wrap text-sm text-muted-foreground font-semibold">
        <Link href="/">About</Link>
        <Link href="/">Press</Link>
        <Link href="/">Copyright</Link>
        <Link href="/">Contact us</Link>
        <Link href="/">Creators</Link>
        <Link href="/">Advertise</Link>
        <Link href="/">Developers</Link>
      </div>
      <div className="flex gap-x-2 gap-y-1 flex-wrap text-sm text-muted-foreground font-semibold">
        <Link href="/">Terms</Link>
        <Link href="/">Privacy</Link>
        <Link href="/">Policy & Safety</Link>
        <Link href="/">Test new features</Link>
      </div>
      <Link href="/" className="text-sm text-muted-foreground font-light">
        &copy; 2025 Google LLC
      </Link>
    </div>
  )
}
