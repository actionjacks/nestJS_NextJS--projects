import './App.scss'

import { useEffect, useState } from 'react'

import AnimeBox from './components/AnimBox/AnimeBox'
import MotionBox from './components/AnimBox/MotionBox'
import { getPageContent, isPageCOntent, PageContent } from './components/Api/Api'
import CircleIndicator from './components/CircleIndicator'
import Draw from './components/Draw'
import Header from './components/Header/Header'

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
      {pageData && (
        <>
          <CircleIndicator />
          <Header
            title={pageData.section1.title}
            telPL={pageData.section1.telPL}
            telUK={pageData.section1.telUK}
          />

          <AnimeBox
            styles={{
              paddingTop: '30px',
            }}
          >
            lorem Ipsum
          </AnimeBox>

          <MotionBox
            styles={{
              paddingTop: '10px',
            }}
          >
            <h1>loremlomtem mmmmmmmmmmmmmmmmm</h1>
          </MotionBox>

          <AnimeBox
            styles={{
              paddingTop: '10px',
            }}
          >
            <h1>lorem</h1>
            <Draw />
          </AnimeBox>
        </>
      )}
    </div>
  )
}

export default App
