import { SiYoutubeshorts } from 'react-icons/si'
import ShortVideoThumbnail from './short-thumbnails'

type Short = {
  id: string
  url: string
  title: string
  image: string
  views: string
}

export default function ShortsSection({ shorts }: { shorts: Short[] }) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <SiYoutubeshorts className="size-5 text-red-600" />
        <h2 className="font-bold">Shorts</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {shorts.map((short) => (
          <ShortVideoThumbnail
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
  )
}
