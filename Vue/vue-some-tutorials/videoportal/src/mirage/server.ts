
import { createServer, Model, JSONAPISerializer } from "miragejs"
import videoJson from './fakeData.json'

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    serializers: { application: JSONAPISerializer },
    fixtures: { videos: videoJson },
    models: { video: Model },
    routes() {
      this.get('api/videos')
    }
  })
  return server
}