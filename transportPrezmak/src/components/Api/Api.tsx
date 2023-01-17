import axios from 'axios'

type DataResponse = PageContent | Record<string, never>

export interface Section1 {
  title: string
  telPL: string
  telUK: string
}

export interface PageContent {
  section1: Section1
  section2: object[]
  section3: object[]
}

export const getPageContent = async () => {
  return await axios.get('./pageContent.json')
}

export const isPageCOntent = (data: DataResponse): data is PageContent => {
  return 'section1' in data
}
