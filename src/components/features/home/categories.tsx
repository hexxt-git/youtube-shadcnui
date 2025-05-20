'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const categories: string[] = [
  'All',
  'Music',
  'Sports',
  'Gaming',
  'News',
  'cats',
  'dogs',
  'birds',
  'cars',
  'food',
  'travel',
  'fashion',
  'art',
  'math',
  'animals',
  'nature',
  'technology',
  'science',
  'history',
  'language',
]

export default function Categories() {
  const elementRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (elementRef.current) {
      elementRef.current.scrollBy({ left: direction === 'left' ? -200 : 200, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full h-fit mb-4">
      <div className="flex gap-2 items-stretch px-0">
        <Button variant="ghost" className="max-sm:hidden" onClick={() => handleScroll('left')}>
          <ChevronLeftIcon className="size-5" strokeWidth={2.5} />
        </Button>

        <div ref={elementRef} className="flex gap-2 w-full overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant="secondary"
              className={cn('px-6 font-bold', category === 'All' && 'bg-foreground text-background')}
              asChild
            >
              <Link href={`/?categories=${category}`}>{category}</Link>
            </Button>
          ))}
        </div>

        <Button variant="ghost" className="max-sm:hidden" onClick={() => handleScroll('right')}>
          <ChevronRightIcon className="size-5" strokeWidth={2.5} />
        </Button>
      </div>
    </div>
  )
}
