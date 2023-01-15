import axios from 'axios'

type DataResponse = PageContent | Record<string, never>

export interface PageContent {
  section1: string[]
  section2: string[]
  section3: string[]
}

export const getPageContent = async () => {
  return await axios.get('./pageContent.json')
}

export const isPageCOntent = (data: DataResponse): data is PageContent => {
  return 'section1' in data
}
