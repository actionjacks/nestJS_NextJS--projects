
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
      // create user
      this.post('api/users', function (schema: any, request) {
        const body = JSON.parse(request.requestBody)
        const response = schema.users.create(body)
        return response
      })
      //get current user !login
      this.post('api/sessions', (schema: any, request) => {
        const email = JSON.parse(request.requestBody).email
        // const password = JSON.parse(request.requestBody).password
        const userByEmail = schema.users.findBy({ email })
        // const userPassword = schema.users.findBy({ password })
        // if (password !== '123') {
        //   return [`${userPassword}`, 'wrong password']
        // }
        return userByEmail
      })
      this.post('api/videos')
      this.put('api/videos/:id')
      this.delete('api/videos/:id')

    }
  })
  return server
}