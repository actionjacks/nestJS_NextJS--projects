export type Videos = {
  id: string
  name: string
  description: string
  thumbnail: string
  url: string
  tagids?: TagsRelations[]
}

export type TagsRelations = {
  type: string
  id: string
}

export class Video implements Videos {
  id: string
  name: string
  description: string
  thumbnail: string
  url: string
  tagids?: TagsRelations[]

  constructor(
    data: Videos, id: string, tagids?: TagsRelations[]) {
    this.id = id
    this.name = data.name
    this.description = data.description
    this.thumbnail = data.thumbnail
    this.url = data.url
    this.tagids = tagids
  }
}