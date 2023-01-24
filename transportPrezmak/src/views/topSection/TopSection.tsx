import './top_section.scss'

import AnimeBox from '../../components/AnimBox/AnimeBox'
import ContactBox from '../../components/ContactBox/ContactBox'

function TopSection() {
  return (
    <div className="section">
      <ContactBox />
      <div className="baner-container">
        <img
          data-aos="flip-down"
          src="../assets/baner_benz.avif"
          alt="Mercedes_sprinter"
        />
      </div>
      <div className="top-section">
        <AnimeBox duration={0.4}>
          <h1 data-aos="fade-up">Prezmak -Usługi Transportowe</h1>
          <h2 data-aos="fade-up">
            Polska
            <span className="right-arrow material-symbols-outlined">arrow_forward</span>
            Anglia
            <span className="right-arrow material-symbols-outlined">arrow_forward</span>
            Polska
          </h2>
        </AnimeBox>
        <AnimeBox duration={0.6}>
          <span
            data-aos="slide-left"
            className="arrow-right-icon material-symbols-outlined"
          >
            line_end_arrow_notch
          </span>
          <p data-aos="fade-up">Przewóz osób</p>
        </AnimeBox>
        <AnimeBox duration={0.8}>
          <span
            data-aos="slide-left"
            className="arrow-right-icon material-symbols-outlined"
          >
            line_end_arrow_notch
          </span>
          <p data-aos="fade-up">Transport paczek</p>
        </AnimeBox>
        <AnimeBox duration={1.2}>
          <span
            data-aos="slide-left"
            className="arrow-right-icon material-symbols-outlined"
          >
            line_end_arrow_notch
          </span>
          <p data-aos="fade-up">Przeprowadzki PL-UK-PL</p>
        </AnimeBox>
        <AnimeBox duration={1.4}>
          <span
            data-aos="slide-left"
            className="arrow-right-icon material-symbols-outlined"
          >
            line_end_arrow_notch
          </span>
          <p data-aos="fade-up">Transport motocykli i Quadów</p>
        </AnimeBox>

        <AnimeBox duration={1.3}>
          <div data-aos="fade-up" className="icon-Container">
            <span className="arrow-icon material-symbols-outlined">
              arrow_circle_right
            </span>
            <p data-aos="fade-up" className="link-text">
              Napisz do nas
            </p>
          </div>
        </AnimeBox>
      </div>
    </div>
  )
}

export default TopSection
