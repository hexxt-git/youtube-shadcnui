import { Button } from '@/components/ui/button'
import { DownloadIcon, HeartIcon, MoreHorizontalIcon, Share2Icon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'

type VideoDetailsProps = {
  title: string
  views: string
  timestamp: string
  likes: string
  channel: {
    name: string
    image: string
    subscribers: string
  }
}

export default function VideoDetails({ video }: { video: VideoDetailsProps }) {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold">{video.title}</h1>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Image
            src={video.channel.image || 'https://picsum.photos/seed/002/500/500'}
            alt={video.channel.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h2 className="font-medium text-sm">{video.channel.name}</h2>
            <p className="text-xs text-muted-foreground">{video.channel.subscribers} subscribers</p>
          </div>
          <Button variant="secondary" className="ml-4 rounded-full">
            Subscribe
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-secondary rounded-full overflow-hidden">
            <Button variant="secondary" className="rounded-none px-4 gap-1.5">
              <ThumbsUpIcon className="h-4 w-4" />
              <span>{video.likes}</span>
            </Button>
            <div className="w-px h-full bg-border" />
            <Button variant="secondary" className="rounded-none px-3">
              <ThumbsDownIcon className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="secondary" className="rounded-full gap-1.5">
            <Share2Icon className="h-4 w-4" />
            <span>Share</span>
          </Button>

          <Button variant="secondary" className="rounded-full gap-1.5">
            <DownloadIcon className="h-4 w-4" />
            <span>Download</span>
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreHorizontalIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
        <div className="flex gap-2 text-sm">
          <span>{video.views} views</span>
          <span>{video.timestamp}</span>
        </div>
        <p className="mt-2 text-sm">Tags: #video #tutorial #youtube</p>
      </div>
    </div>
  )
}
