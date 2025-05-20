'use client'

import { PauseIcon, PlayIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon } from 'lucide-react'
import { useState } from 'react'

type VideoPlayerProps = {
  videoUrl: string
  poster?: string
  title?: string
}

export default function VideoPlayer({ videoUrl, poster, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative aspect-video bg-black rounded-md overflow-hidden w-full">
      <video className="w-full h-full object-contain" src={videoUrl} poster={poster} title={title} />

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-white hover:bg-white/10 rounded-full p-1">
              {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
            </button>
            <button className="text-white hover:bg-white/10 rounded-full p-1">
              <SkipForwardIcon className="h-5 w-5" />
            </button>
            <div className="text-white text-xs mx-2">0:02 / 14:41</div>
          </div>

          <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="bg-white h-full w-[5%]" />
          </div>

          <div className="flex items-center gap-1 ml-2">
            <button className="text-white hover:bg-white/10 rounded-full p-1">
              <VolumeIcon className="h-5 w-5" />
            </button>
            <div className="text-white text-xs mx-1">1080p</div>
          </div>
        </div>
      </div>
    </div>
  )
}
