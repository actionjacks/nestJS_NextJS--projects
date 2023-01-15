import './App.scss'

import { useEffect, useState } from 'react'

import AnimeBox from './components/AnimBox/AnimeBox'
import { getPageContent, isPageCOntent, PageContent } from './components/Api/Api'
import CircleIndicator from './components/CircleIndicator'
import Draw from './components/Draw'

const App = () => {
  const [pageData, setPageData] = useState<PageContent | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getPageContent()
      .then((data) => {
        const datum = data.data
        if (isPageCOntent(datum)) {
          setPageData(datum)
          return
        }
        setError('Ups cos poszło nie tak :(')
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    <div className="App">
      <CircleIndicator backGroundColor={'black'} />

      <AnimeBox>
        <Draw />
      </AnimeBox>

      <AnimeBox>
        {error}
        <h1>{pageData?.section1.map((i) => i)}</h1>
      </AnimeBox>

      <AnimeBox>
        <h1>lorem</h1>
      </AnimeBox>
    </div>
  )
}

export default App
