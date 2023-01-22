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
          <div className="section middle">
            <div className="middle-section">
              <AnimeBox>
                <AnimeBox duration={0.4}>
                  <p className="middle-title" data-aos="fade-up">
                    Lorem ____
                  </p>
                </AnimeBox>
                <div className="price-box">
                  <AnimeBox duration={1}>
                    <h3 data-aos="fade-up">Ceny juz Od</h3>
                    <div className="price">
                      <span className="currency-icon pound material-symbols-outlined">
                        currency_pound
                      </span>
                      <AnimeBox duration={1.3}>
                        <p className="price-value">30</p>
                      </AnimeBox>
                    </div>
                  </AnimeBox>
                </div>
                <AnimeBox duration={0.6}>
                  <h2 className="middle-title" data-aos="fade-up">
                    Web.Auto Lorem
                  </h2>
                </AnimeBox>
                <AnimeBox duration={1.3}>
                  <img
                    className="box-icon"
                    data-aos="flip-down"
                    src="../assets/box-icon.png"
                    alt="box"
                  />
                </AnimeBox>
                <AnimeBox duration={0.8}>
                  <p className="bottom-title" data-aos="fade-up">
                    Web.Auto Lorem
                  </p>
                  <span className="material-symbols-outlined">arrow_circle_right</span>
                </AnimeBox>
              </AnimeBox>
            </div>
          </div>

          <div className="section bottom">
            <AnimeBox>
              <p>lorem Ipsum lorem lorem lorem</p>
            </AnimeBox>
            <div className="form-wrapper">
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="form-title"
              >
                lorem
              </p>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="form"
              >
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                </div>

                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                </div>

                <div className="form__group field">
                  <textarea
                    className="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                </div>
              </div>

              <div data-aos="fade-up" className="button-wrapper">
                <button className="send_button">SEND</button>
              </div>
            </div>

            <AnimeBox>
              <p>Lorem ipsum dolor sit amet consectetur, a=</p>
            </AnimeBox>
            <AnimeBox>
              <p>Lorem ipsum dolor sit amet consectetur, a=</p>
            </AnimeBox>

            <div className="footer-wrapper">
              <div className="icons-box">
                <img
                  className="box-icon"
                  src="../assets/fb-icon.png"
                  alt="icon-facebook"
                />
              </div>
            </div>

            <div className="footer-data">
              <p className="ovner">Prezmak - </p>
              <p className="author">realizacja actionjacks@</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
