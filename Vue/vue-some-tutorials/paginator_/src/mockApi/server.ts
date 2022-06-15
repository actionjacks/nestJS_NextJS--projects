import { createServer, Model, JSONAPISerializer, hasMany } from "miragejs"
import dataForTableJSON from './tableData.json'

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    serializers:
    {
      application: JSONAPISerializer,
      table: JSONAPISerializer.extend({
        normalize(json) {
          return {
            data: {
              type: 'json',
              attributes: json
            }
          }
        }
      })
    },
    fixtures: {
      tables: dataForTableJSON
    },
    models: {
      table: Model
    },
    routes() {
      this.get('api/table')
    }
  })
  return server
}