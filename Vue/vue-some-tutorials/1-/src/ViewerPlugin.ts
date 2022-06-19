import type { App } from 'vue'
import { FileUpload } from './components/PluginForNpm/'

export default {
  install: (app: App, options: { img: string } = { img: '' }) => {
    app.component("FileUpload", FileUpload)
    app.provide("fileUploadImage", options?.img)
  }
}

export { FileUpload }