export type Videos = {
  id: string
  name: string
  description: string
  thumbnail: string
  url: string
  tagids?: string[]
}

export class Video implements Videos {
  id: string
  name: string
  description: string
  thumbnail: string
  url: string
  tagids?: string[]

  constructor(data: Videos, id: string) {
    this.id = id
    this.name = data.name
    this.description = data.description
    this.thumbnail = data.thumbnail
    this.url = data.url
    this.tagids = data.tagids
  }
}