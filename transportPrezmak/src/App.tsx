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
      <CircleIndicator />
      {pageData && (
        <>
          <div className="section">
            <AnimeBox>lorem Ipsum</AnimeBox>
          </div>

          <div className="section">
            <AnimeBox>lorem Ipsum</AnimeBox>
          </div>

          <div className="section">
            <AnimeBox>lorem Ipsum</AnimeBox>
          </div>
        </>
      )}
    </div>
  )
}

export default App
