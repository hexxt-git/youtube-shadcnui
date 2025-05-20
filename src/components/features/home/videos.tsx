import Thumbnail from './thumbnail'

const VIDEOS = [
  {
    id: '1',
    url: '/video/1',
    title: 'Forest Adventure 🌲 - Fantasy Music for Inspiration',
    image: '/placeholder.png',
    channel: 'Blue Turtle',
    channelImage: '/placeholder.png',
    views: 202,
    duration: '11:55:00',
    timestamp: '3 weeks ago',
    progress: 30,
  },
  {
    id: '2',
    url: '/video/2',
    title: 'Learn React in 30 Minutes - Beginner Friendly Tutorial',
    image: '/placeholder.png',
    channel: 'Code Masters',
    channelImage: '/placeholder.png',
    views: 1542,
    duration: '32:10',
    timestamp: '2 days ago',
    progress: 60,
  },
  {
    id: '3',
    url: '/video/3',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: '/placeholder.png',
    channel: 'History Enthusiasts',
    channelImage: '/placeholder.png',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
  },
  {
    id: '4',
    url: '/video/4',
    title: 'Cook With Me: 5 Easy Dinner Recipes Anyone Can Make',
    image: '/placeholder.png',
    channel: 'Chef Julia',
    channelImage: '/placeholder.png',
    views: 3291,
    duration: '22:47',
    timestamp: '5 days ago',
  },
  {
    id: '5',
    url: '/video/5',
    title: 'Spring Web Development - Building a Full Stack App from Scratch',
    image: '/placeholder.png',
    channel: 'Tech Insights',
    channelImage: '/placeholder.png',
    views: 982,
    duration: '1:05:30',
    timestamp: '1 day ago',
  },
  {
    id: '6',
    url: '/video/6',
    title: 'Relaxing Piano Music for Work, Study and Focus',
    image: '/placeholder.png',
    channel: 'Peaceful Melodies',
    channelImage: '/placeholder.png',
    views: 12893,
    duration: '3:42:15',
    timestamp: '2 months ago',
  },
  {
    id: '7',
    url: '/video/7',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: '/placeholder.png',
    channel: 'History Enthusiasts',
    channelImage: '/placeholder.png',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
    progress: 100,
  },
  {
    id: '8',
    url: '/video/8',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: '/placeholder.png',
    channel: 'History Enthusiasts',
    channelImage: '/placeholder.png',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
    progress: 10,
  },
  {
    id: '9',
    url: '/video/9',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: '/placeholder.png',
    channel: 'History Enthusiasts',
    channelImage: '/placeholder.png',
    views: 5438,
    duration: '15:22',
    timestamp: '1 week ago',
  },
  {
    id: '10',
    url: '/video/10',
    title: 'The Hidden Secrets of Ancient Civilizations',
    image: '/placeholder.png',
    channel: 'History Enthusiasts',
    channelImage: '/placeholder.png',
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
