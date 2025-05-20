import Image from 'next/image'
import Link from 'next/link'

type ShortVideoThumbnailProps = {
  url: string
  title: string
  image: string
  views: string
}

export default function ShortVideoThumbnail({ thumbnail }: { thumbnail: ShortVideoThumbnailProps }) {
  return (
    <Link href={thumbnail.url} className="flex-none w-[160px]">
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-2">
        <Image
          src={thumbnail.image || '/placeholder.png'}
          alt={thumbnail.title}
          fill
          className="object-cover transition-all hover:scale-105"
        />
      </div>

      <div className="px-1">
        <h3 className="text-sm font-semibold line-clamp-2">{thumbnail.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{thumbnail.views}</p>
      </div>
    </Link>
  )
}
