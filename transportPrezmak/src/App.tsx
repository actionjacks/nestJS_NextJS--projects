import './App.scss'
import 'aos/dist/aos.css'

import AOS from 'aos'
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
          <div className="section">
            <div className="baner-container">
              <img
                data-aos="flip-down"
                src="../assets/baner_benz.avif"
                alt="Mercedes_sprinter"
              />
            </div>
            <div className="top-section">
              <AnimeBox duration={0.4}>
                <h1 data-aos="fade-up">Web.Auto Lorem</h1>
              </AnimeBox>
              <AnimeBox duration={0.6}>
                <p data-aos="fade-up">Lorem ipsum dolor</p>
              </AnimeBox>
              <AnimeBox duration={0.8}>
                <p data-aos="fade-up">Lorem ipsum dolor</p>
              </AnimeBox>
              <AnimeBox duration={1.2}>
                <p data-aos="fade-up">Lorem ipsum dolor</p>
              </AnimeBox>

              <AnimeBox duration={1.3}>
                <div data-aos="fade-up" className="icon-Container">
                  <span className="material-symbols-outlined">arrow_circle_right</span>
                  <p data-aos="fade-up" className="link-text">
                    lorem lorem lorem
                  </p>
                </div>
              </AnimeBox>
            </div>
          </div>

          <div className="section middle">
            <div className="middle-section">
              <AnimeBox>
                <AnimeBox duration={0.4}>
                  <h2 data-aos="fade-up">Lorem ____</h2>
                </AnimeBox>
                <AnimeBox duration={0.4}>
                  <h1 data-aos="fade-up">Web.Auto Lorem</h1>
                </AnimeBox>
                <AnimeBox duration={0.4}>
                  <h1 data-aos="fade-up">Web.Auto Lorem</h1>
                </AnimeBox>
              </AnimeBox>
            </div>
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
