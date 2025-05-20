'use client'

import Categories from '@/components/features/home/categories'
import { Comments } from '@/components/features/videos/comments'
import RelatedVideos from '@/components/features/videos/related-videos'
import ShortsSection from '@/components/features/videos/shorts-section'
import VideoDetails from '@/components/features/videos/video-details'
import VideoPlayer from '@/components/features/videos/video-player'
import { cn } from '@/lib/utils'
import { SidebarContext } from '@/components/providers/sidebar-provider'
import { useContext } from 'react'

export default function VideoPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the video data based on the slug
  // For now, we'll use static demo data

  const videoData = {
    id: '1',
    title: 'I learned how to PUNCH NEEDLE in just 7 days 🌱',
    videoUrl: 'https://example.com/video.mp4',
    poster: '/placeholder.png',
    views: '528K views',
    timestamp: '3 months ago',
    likes: '24K',
    channel: {
      name: 'Stella Sun',
      image: '/placeholder.png',
      subscribers: '25.4K',
    },
  }

  const comments = [
    {
      id: '1',
      user: {
        name: 'm0nami',
        image: '/placeholder.png',
      },
      text: "The type of fabric makes a huge difference in your punch needle experience! A really tight woven fabric doesn't leave a lot of room for the needle to punch through. Also the angle is important. The needle should be straight up and down. You did an excellent job with what you did! Also,there are special hoops you can get that really grip the fabric in place so the fabric doesn't slip. I'm inspired and totally going to do something on a tote now too!",
      timestamp: '3 months ago',
      likes: 809,
    },
    {
      id: '2',
      user: {
        name: 'User2',
        image: '/placeholder.png',
      },
      text: 'This looks amazing! Thanks for sharing the process.',
      timestamp: '2 months ago',
      likes: 245,
    },
  ]

  const shorts = [
    {
      id: '1',
      url: '/shorts/1',
      title: 'Granny Squares Blocking Board',
      image: '/placeholder.png',
      views: '496K views',
    },
    {
      id: '2',
      url: '/shorts/2',
      title: 'i made bunny pancakes!',
      image: '/placeholder.png',
      views: '8.3M views',
    },
    {
      id: '3',
      url: '/shorts/3',
      title: 'DIY Bakery for my Daughter',
      image: '/placeholder.png',
      views: '15M views',
    },
  ]

  const relatedVideos = [
    {
      id: '1',
      url: '/videos/1',
      title: '[Punch Needle] Embroidered remake of Mujirushi bag 👝 ✨',
      image: '/placeholder.png',
      channel: 'PINGLE PONGLE',
      views: '321K views',
      timestamp: '5 months ago',
      duration: '13:54',
    },
    {
      id: '2',
      url: '/videos/2',
      title: 'A relaxing day💕 Lofi Hip Hop Radio 🎧 Chill with Sweet Vibes',
      image: '/placeholder.png',
      channel: 'Sweet Vibes',
      views: '109K views',
      timestamp: '5 months ago',
      duration: '11:54:56',
    },
    {
      id: '3',
      url: '/videos/3',
      title: 'ASMR + Drawing and Watercolor Painting',
      image: '/placeholder.png',
      channel: 'tuğçe dumlupınar',
      views: '443K views',
      timestamp: '1 year ago',
      duration: '23:50',
    },
  ]

  const { isOpen } = useContext(SidebarContext)

  return (
    <div className={cn('max-w-[1360px]', !isOpen && 'mx-auto')}>
      <div className="flex flex-col lg:flex-row gap-6 px-4">
        <div className="flex-1">
          <VideoPlayer videoUrl={videoData.videoUrl} poster={videoData.poster} title={videoData.title} />
          <VideoDetails video={videoData} />
          <Comments comments={comments} />
        </div>

        <div className="md:w-[420px] lg:w-[460px]">
          <Categories />
          <RelatedVideos videos={relatedVideos} />
          <ShortsSection shorts={shorts} />
          <RelatedVideos videos={relatedVideos} />
          <ShortsSection shorts={shorts} />
          <RelatedVideos videos={relatedVideos} />
          <RelatedVideos videos={relatedVideos} />
        </div>
      </div>
    </div>
  )
}
