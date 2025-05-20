'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ThumbsUpIcon, ThumbsDownIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type Comment = {
  id: string
  user: {
    name: string
    image: string
  }
  text: string
  timestamp: string
  likes: number
}

export function CommentInput() {
  const [comment, setComment] = useState('')

  return (
    <div className="flex gap-3 mb-6 w-full">
      <Image src="/placeholder.png" alt="Channel avatar" width={40} height={40} className="rounded-full w-10 h-10" />
      <div className="flex-1">
        <Textarea placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
        <div className="flex justify-end mt-2 gap-2">
          <Button variant="ghost" size="sm" onClick={() => setComment('')}>
            Cancel
          </Button>
          <Button
            variant="default"
            size="sm"
            disabled={!comment.trim()}
            onClick={() => {
              // Handle comment submission
              setComment('')
            }}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  )
}

export function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-3 mb-4">
      <Image
        src={comment.user.image || '/placeholder.png'}
        alt={comment.user.name}
        width={40}
        height={40}
        className="rounded-full w-10 h-10"
      />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{comment.user.name}</p>
          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
        </div>
        <p className="text-sm mt-1">{comment.text}</p>
        <div className="flex gap-2 mt-2">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsUpIcon className="size-4" /> {comment.likes}
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <ThumbsDownIcon className="size-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            Reply
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Comments({ comments }: { comments: Comment[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-4">{comments.length} Comments</h3>
      <CommentInput />
      <div>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
