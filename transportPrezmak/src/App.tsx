import './App.scss'
import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect, useState } from 'react'

import { getPageContent, isPageCOntent, PageContent } from './components/Api/Api'
import CircleIndicator from './components/CircleIndicator'
import BottomSection from './views/bottomSection/BottomSection'
import MiddleSection from './views/middleSection/MiddleSection'
import TopSection from './views/topSection/TopSection'

const App = () => {
  const [pageData, setPageData] = useState<PageContent | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })

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
      <CircleIndicator backGroundColor={'#5cb4c0'} />
      {pageData && (
        <>
          <TopSection />
          <MiddleSection />
          <BottomSection />
        </>
      )}
    </div>
  )
}

export default App
