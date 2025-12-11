import Image from 'next/image'
import Link from 'next/link'

type VideoThumbnailProps = {
  url: string
  title: string
  image: string
  channel: string
  views: string
  timestamp: string
  duration: string
}

export default function VideoThumbnail({ thumbnail }: { thumbnail: VideoThumbnailProps }) {
  return (
    <Link href={thumbnail.url} className="flex gap-2 mb-3 group">
      <div className="relative h-32 w-40 min-w-[220px] rounded-md overflow-hidden">
        <Image
          src={thumbnail.image || 'https://picsum.photos/seed/001/500/500'}
          alt={thumbnail.title}
          fill
          className="object-cover transition-all group-hover:scale-105"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
          {thumbnail.duration}
        </div>
      </div>

      <div className="flex flex-col overflow-hidden">
        <h3 className="text-sm font-semibold line-clamp-2">{thumbnail.title}</h3>
        <p className="text-xs text-muted-foreground">{thumbnail.channel}</p>
        <p className="text-xs text-muted-foreground">
          {thumbnail.views} • {thumbnail.timestamp}
        </p>
      </div>
    </Link>
  )
}
