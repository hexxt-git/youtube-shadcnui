import Image from 'next/image'
import Link from 'next/link'

type ShortThumbnail = {
  url: string
  title: string
  image: string
  views?: string
}

export default function ShortThumbnail({ thumbnail }: { thumbnail: ShortThumbnail }) {
  return (
    <Link href={thumbnail.url} className="group w-[260px] cursor-pointer">
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-2">
        <Image
          src={thumbnail.image || 'https://picsum.photos/seed/040/500/500'}
          alt={thumbnail.title}
          fill
          className="object-cover transition-all group-hover:scale-105"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold line-clamp-2">{thumbnail.title}</h3>
        {thumbnail.views && <p className="text-xs text-muted-foreground mt-1">{thumbnail.views}</p>}
      </div>
    </Link>
  )
}
