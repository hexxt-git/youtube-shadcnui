import Image from 'next/image'
import Link from 'next/link'

type Thumbnail = {
  url: string
  title: string
  image: string
  channel: string
  channelImage: string
  views: number
  duration: string
  timestamp: string
  progress?: number
}

export default function Thumbnail({ thumbnail }: { thumbnail: Thumbnail }) {
  return (
    <Link href={thumbnail.url} className="group w-full max-w-[420px] cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
        <Image
          src={thumbnail.image || 'https://picsum.photos/seed/031/500/500'}
          alt={thumbnail.title}
          fill
          className="object-cover transition-all group-hover:scale-105 duration-300 ease-in-out"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
          {thumbnail.duration}
        </div>
        {thumbnail.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted-foreground">
            <div className="h-full bg-primary" style={{ width: `${thumbnail.progress}%` }}></div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <div className="shrink-0">
          <Image
            src={thumbnail.channelImage || 'https://picsum.photos/seed/032/500/500'}
            alt={thumbnail.channel}
            width={36}
            height={36}
            className="rounded-full w-9 h-9"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <h3 className="text-sm font-semibold line-clamp-2">{thumbnail.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{thumbnail.channel}</p>
          <p className="text-xs text-muted-foreground">
            {thumbnail.views.toLocaleString()} views • {thumbnail.timestamp}
          </p>
        </div>
      </div>
    </Link>
  )
}
