export type CurrentUser = {
  name: string
  email: string
  admin?: boolean
}

export interface User {
  id: number
  name: string
  email: string
  admin?: boolean
  playedVideos: string[]
}

export class User implements User {
  id: number
  name: string
  email: string
  admin?: boolean
  playedVideos: string[]

  constructor(data: User) {
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.admin = data.admin
    this.playedVideos = data.playedVideos
  }
}