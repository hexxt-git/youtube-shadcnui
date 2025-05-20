import { Flame } from 'lucide-react'
import ShortThumbnail from './short-thumbnail'
import { SiYoutubeshorts } from 'react-icons/si'

const SHORTS = [
  {
    id: '1',
    url: '/shorts/1',
    title: 'Cute husky puppy howling',
    image: '/placeholder.png',
    views: '1.2M views',
  },
  {
    id: '2',
    url: '/shorts/2',
    title: 'Kuromi Outfit Totabo Robux',
    image: '/placeholder.png',
    views: '452K views',
  },
  {
    id: '3',
    url: '/shorts/3',
    title: '2000s fashion throwback',
    image: '/placeholder.png',
    views: '892K views',
  },
  {
    id: '4',
    url: '/shorts/4',
    title: "I'M JOY 😆😆",
    image: '/placeholder.png',
    views: '2.3M views',
  },
  {
    id: '5',
    url: '/shorts/5',
    title: 'Quick morning routine 🌞',
    image: '/placeholder.png',
    views: '750K views',
  },
  {
    id: '6',
    url: '/shorts/6',
    title: 'Cooking hack you need to try!',
    image: '/placeholder.png',
    views: '1.5M views',
  },
  {
    id: '7',
    url: '/shorts/7',
    title: 'Amazing street performer in NYC',
    image: '/placeholder.png',
    views: '3.7M views',
  },
]

export default function Shorts() {
  return (
    <div className="px-4">
      <div className="flex items-center gap-2 mb-4 py-4">
        <SiYoutubeshorts className="h-6 w-6 text-red-500" />
        <h2 className="text-xl font-semibold">Shorts</h2>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 w-fit pb-4">
          {SHORTS.map((short) => (
            <ShortThumbnail
              key={short.id}
              thumbnail={{
                url: short.url,
                title: short.title,
                image: short.image,
                views: short.views,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
