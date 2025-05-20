import Categories from '@/components/features/home/categories'
import Shorts from '@/components/features/home/shorts'
import Videos from '@/components/features/home/videos'

export default function Home() {
  return (
    <>
      <Categories />
      <Videos />
      <hr className="border-1 mx-4 my-4" />
      <Shorts />
      <hr className="border-1 mx-4 my-4" />
      <Videos />
      <hr className="border-1 mx-4" />
      <Shorts />
    </>
  )
}
