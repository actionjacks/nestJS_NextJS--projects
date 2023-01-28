import './top_section.scss'

import AnimeBox from '../../components/AnimBox/AnimeBox'
import ContactBox from '../../components/ContactBox/ContactBox'

function TopSection() {
  return (
    <div className="top-section">
      <ContactBox />
      <div className="title-wrapper">
        <h1 data-aos="slide-left">Prezmak -Usługi Transportowe</h1>
        <h2 data-aos="slide-left">Przewóz osób transport paczek przeprowadzki</h2>
        <p data-aos="slide-left">Polska-Anglia-Polska</p>
      </div>
      <header className="header">
        <div className="banner-wrapper" data-aos="fade">
          <div className="banner-wrapper" data-aos="fade">
            <div className="bg" />
            <div className="banner" />
          </div>
        </div>
      </header>
      <div className="bottom-section">
        <div className="bottom-title">
          <AnimeBox duration={0.5}>
            <span data-aos="slide-left" className="material-symbols-outlined">
              navigate_next
            </span>
            <p data-aos="fade-up">Transport paczek</p>
          </AnimeBox>
          <AnimeBox duration={0.7}>
            <span data-aos="slide-left" className="material-symbols-outlined">
              navigate_next
            </span>
            <p data-aos="fade-up">Przeprowadzki PL-UK-PL</p>
          </AnimeBox>
          <AnimeBox duration={0.9}>
            <span data-aos="slide-left" className="material-symbols-outlined">
              navigate_next
            </span>
            <p data-aos="fade-up">Transport motocykli i Quadów</p>
          </AnimeBox>
          <AnimeBox duration={1}>
            <span data-aos="slide-left" className="material-symbols-outlined">
              navigate_next
            </span>
            <p data-aos="fade-up">Przewóz osób</p>
          </AnimeBox>
          <AnimeBox duration={1.4}>
            <div data-aos="fade-up" className="icon-Container">
              <span className="arrow-icon material-symbols-outlined">
                arrow_circle_right
              </span>
              <a data-aos="fade-up" href="mailto:firma-prezmak@tlen.pl">
                Napisz do nas
              </a>
            </div>
          </AnimeBox>
        </div>
      </div>
    </div>
  )
}

export default TopSection
