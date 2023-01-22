import './top_section.scss'

import AnimeBox from '../../components/AnimBox/AnimeBox'

function TopSection() {
  return (
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
  )
}

export default TopSection
