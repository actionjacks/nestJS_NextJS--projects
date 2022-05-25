import { User } from '@/Classes/Users'
import { Videos } from '@/Classes/Videos'
import { Tag } from '.'

export type State = {
  videos: Videos[]
  tags: Tag
  playedVideos: string[]
  users: User[]
  currentUser: User | null
}