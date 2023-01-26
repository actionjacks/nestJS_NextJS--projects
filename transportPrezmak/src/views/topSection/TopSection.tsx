import './top_section.scss'

import AnimeBox from '../../components/AnimBox/AnimeBox'
import ContactBox from '../../components/ContactBox/ContactBox'

function TopSection() {
  return (
    <div className="top-section">
      <ContactBox />

      <div className="title-wrapper">
        <AnimeBox duration={0.8}>
          <h1 data-aos="fade">Prezmak -Usługi Transportowe</h1>
          <h2 data-aos="fade">Przewóz osób, transport paczek, przeprowadzki</h2>
          <AnimeBox duration={1.2}>
            <p>Polska-Anglia-Polska</p>
          </AnimeBox>
        </AnimeBox>
      </div>

      <header className="header">
        <div className="banner-wrapper" data-aos="fade">
          <img
            className="banner"
            src="../assets/main-bg-van.jpg"
            alt="Mercedes_sprinter"
          />
        </div>
      </header>

      <div data-aos="fade-down">
        <AnimeBox duration={0.8}>
          <div className="bottom-section">
            <div className="bottom-title">
              <AnimeBox duration={0.5}>
                <span
                  data-aos="slide-left"
                  className="arrow-right-icon material-symbols-outlined"
                >
                  line_end_arrow_notch
                </span>
                <p data-aos="fade-up">Transport paczek</p>
              </AnimeBox>
              <AnimeBox duration={0.7}>
                <span
                  data-aos="slide-left"
                  className="arrow-right-icon material-symbols-outlined"
                >
                  line_end_arrow_notch
                </span>
                <p data-aos="fade-up">Przeprowadzki PL-UK-PL</p>
              </AnimeBox>
              <AnimeBox duration={0.9}>
                <span
                  data-aos="slide-left"
                  className="arrow-right-icon material-symbols-outlined"
                >
                  line_end_arrow_notch
                </span>
                <p data-aos="fade-up">Transport motocykli i Quadów</p>
              </AnimeBox>
              <AnimeBox duration={1}>
                <span
                  data-aos="slide-left"
                  className="arrow-right-icon material-symbols-outlined"
                >
                  line_end_arrow_notch
                </span>
                <p data-aos="fade-up">Przewóz osób</p>
              </AnimeBox>
              <AnimeBox duration={1.4}>
                <div data-aos="fade-up" className="icon-Container">
                  <span className="arrow-icon material-symbols-outlined">
                    arrow_circle_right
                  </span>
                  <p data-aos="fade-up" className="link-text">
                    Napisz do nas _ firma-prezmak@tlen.pl
                  </p>
                </div>
              </AnimeBox>
            </div>
          </div>
        </AnimeBox>
      </div>
    </div>
  )
}

export default TopSection
