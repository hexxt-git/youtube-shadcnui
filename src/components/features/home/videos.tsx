import Thumbnail from './thumbnail'

const VIDEOS = [
  {
    id: '1',
    url: '/videos/1',
    title: 'Forest Adventure 🌲 - Fantasy Music for Inspiration',
    image: 'https://picsum.photos/seed/011/500/500',
    channel: 'Blue Turtle',
    channelImage: 'https://picsum.photos/seed/012/500/500',
    views: 202,
    duration: '11:55:00',
    timestamp: '3 weeks ago',
    progress: 30,
  },
  {
    id: '2',
    url: '/videos/2',
    title: 'Learn React in 30 Minutes - Beginner Friendly Tutorial',
    image: 'https://picsum.photos/seed/013/500/500',
    channel: 'Code Masters',
    channelImage: 'https://picsum.photos/seed/014/500/500',
    views: 1542,
    duration: '32:10',
    timestamp: '2 days ago',
    progress: 60,
  },
  {
    id: '3',
    url: '/videos/3',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: 'https://picsum.photos/seed/015/500/500',
    channel: 'History Enthusiasts',
    channelImage: 'https://picsum.photos/seed/016/500/500',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
  },
  {
    id: '4',
    url: '/videos/4',
    title: 'Cook With Me: 5 Easy Dinner Recipes Anyone Can Make',
    image: 'https://picsum.photos/seed/017/500/500',
    channel: 'Chef Julia',
    channelImage: 'https://picsum.photos/seed/018/500/500',
    views: 3291,
    duration: '22:47',
    timestamp: '5 days ago',
  },
  {
    id: '5',
    url: '/videos/5',
    title: 'Spring Web Development - Building a Full Stack App from Scratch',
    image: 'https://picsum.photos/seed/019/500/500',
    channel: 'Tech Insights',
    channelImage: 'https://picsum.photos/seed/020/500/500',
    views: 982,
    duration: '1:05:30',
    timestamp: '1 day ago',
  },
  {
    id: '6',
    url: '/videos/6',
    title: 'Relaxing Piano Music for Work, Study and Focus',
    image: 'https://picsum.photos/seed/021/500/500',
    channel: 'Peaceful Melodies',
    channelImage: 'https://picsum.photos/seed/022/500/500',
    views: 12893,
    duration: '3:42:15',
    timestamp: '2 months ago',
  },
  {
    id: '7',
    url: '/videos/7',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: 'https://picsum.photos/seed/023/500/500',
    channel: 'History Enthusiasts',
    channelImage: 'https://picsum.photos/seed/024/500/500',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
    progress: 100,
  },
  {
    id: '8',
    url: '/videos/8',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: 'https://picsum.photos/seed/025/500/500',
    channel: 'History Enthusiasts',
    channelImage: 'https://picsum.photos/seed/026/500/500',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
    progress: 10,
  },
  {
    id: '9',
    url: '/videos/9',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: 'https://picsum.photos/seed/027/500/500',
    channel: 'History Enthusiasts',
    channelImage: 'https://picsum.photos/seed/028/500/500',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
  },
  {
    id: '10',
    url: '/videos/10',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: 'https://picsum.photos/seed/029/500/500',
    channel: 'History Enthusiasts',
    channelImage: 'https://picsum.photos/seed/030/500/500',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
  },
]

export default function Videos() {
  return (
    <div className="grid grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3 @8xl:grid-cols-4 @10xl:grid-cols-5 gap-x-4 gap-y-8 p-4">
      {VIDEOS.map((video) => (
        <Thumbnail
          key={video.id}
          thumbnail={{
            url: video.url,
            title: video.title,
            image: video.image,
            channel: video.channel,
            channelImage: video.channelImage,
            views: video.views,
            duration: video.duration,
            timestamp: video.timestamp,
            progress: video.progress,
          }}
        />
      ))}
    </div>
  )
}
