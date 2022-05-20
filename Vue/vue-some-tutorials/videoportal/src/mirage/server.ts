
import { createServer, Model, JSONAPISerializer, hasMany } from "miragejs"
import videoJson from './videos.json'
import tagsJSON from './tagsVideo.json'

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    serializers:
    {
      application: JSONAPISerializer,
      video: JSONAPISerializer.extend({
        include: ['tags'],
        normalize(json) {
          return {
            data: {
              type: 'video',
              attributes: json
            }
          }
        }
      }),
      tag: JSONAPISerializer.extend({
        include: ['videos']
      })
    },
    fixtures:
    {
      videos: videoJson,
      tags: tagsJSON
    },
    models: {
      video: Model.extend({
        tags: hasMany()
      }),
      tag: Model.extend({
        videos: hasMany()
      })
    },
    routes() {
      this.get('api/videos')
      this.post('api/videos')
      this.put('api/videos/:id')
      this.delete('api/videos/:id')
    }
  })
  return server
}