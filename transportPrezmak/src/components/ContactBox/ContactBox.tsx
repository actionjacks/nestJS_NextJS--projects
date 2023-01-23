import './contact_box.scss'

import AnimeBox from '../../components/AnimBox/AnimeBox'

function ContactBox() {
  return (
    <div className="contact-wrapper">
      <AnimeBox duration={0.5}>
        <span className="material-symbols-outlined">phone_in_talk</span>
        <img className="flag-icon" src="./assets/icons8-poland-100.png" alt="PL flag" />
        <div>
          <a className="phone" href="/">
            0000000000000
          </a>
        </div>
      </AnimeBox>

      <AnimeBox duration={1}>
        <span className="material-symbols-outlined">phone_in_talk</span>
        <img
          className="flag-icon"
          src="./assets/icons8-great-britain-100.png"
          alt="UK flag"
        />
        <div className="phone-contaner">
          <a className="phone" href="/">
            0000000000000
          </a>
        </div>
      </AnimeBox>
    </div>
  )
}

export default ContactBox
