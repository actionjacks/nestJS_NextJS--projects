import { User } from '@/Classes/Users'
import { Videos } from '@/Classes/Videos'
import { Tag } from '.'

export type Position = 'bottom' | 'up' | 'left' | 'right'

export type ShowPopup = {
  title: string,
  position: Position
  show: boolean
}

export type State = {
  videos: Videos[]
  tags: Tag
  playedVideos: string[]
  users: User[]
  currentUser: User | null
  showPopup: ShowPopup[]
}