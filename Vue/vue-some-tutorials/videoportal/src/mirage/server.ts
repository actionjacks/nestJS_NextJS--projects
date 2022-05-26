
import { createServer, Model, JSONAPISerializer, hasMany } from "miragejs"
import usersJson from './users.json'
import videoJson from './videos.json'
import tagsJson from './tagsVideo.json'

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
      }),
      user: JSONAPISerializer.extend({
        attrs: ['name', 'email', 'admin', 'playedVideos'],
        keyForAttribute(attr) {
          return attr
        }
      })
    },
    fixtures:
    {
      videos: videoJson,
      tags: tagsJson,
      users: usersJson

    },
    models: {
      video: Model.extend({
        tags: hasMany()
      }),
      tag: Model.extend({
        videos: hasMany()
      }),
      user: Model
    },
    routes() {
      this.get('api/videos')
      this.get('api/users')
      this.post('api/sessions', (schema: any, request) => {
        const email = JSON.parse(request.requestBody).email
        const response = schema.users.findBy({ email })
        return response
      })
      this.post('api/videos')
      this.put('api/videos/:id')
      this.delete('api/videos/:id')

    }
  })
  return server
}