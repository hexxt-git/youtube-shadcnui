import VideoThumbnail from './video-thumbnails'

type Video = {
  id: string
  url: string
  title: string
  image: string
  channel: string
  views: string
  timestamp: string
  duration: string
}

export default function RelatedVideos({ videos }: { videos: Video[] }) {
  return (
    <div className="mt-4">
      {videos.map((video) => (
        <VideoThumbnail
          key={video.id}
          thumbnail={{
            url: video.url,
            title: video.title,
            image: video.image,
            channel: video.channel,
            views: video.views,
            timestamp: video.timestamp,
            duration: video.duration,
          }}
        />
      ))}
    </div>
  )
}
