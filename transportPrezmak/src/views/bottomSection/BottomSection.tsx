import '../bottomSection/bottom_section.scss'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

import AnimeBox from '../../components/AnimBox/AnimeBox'

function BottomSection() {
  const formRef = useRef(null)

  const sendForm = () => {
    emailjs
      .sendForm(
        'service_bcszigm',
        'template_mjetvlo',
        formRef.current ?? '',
        '-Oj_VJeVHwEOei9Ly',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <>
      <div className="section bottom">
        <AnimeBox>
          <p>MASZ PYTANIA?</p>
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
            Chcesz wycenić transport lub paczkę UK-PL? Napisz do nas teraz
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
            <form ref={formRef}>
              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Email"
                  name="from_name"
                  id="name"
                  required
                />
                <label htmlFor="from_name" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group field">
                <input
                  type="input"
                  className="form__field"
                  placeholder="Telefon"
                  name="from_tel"
                  id="name"
                  required
                />
                <label htmlFor="from_tel" className="form__label">
                  Telefon
                </label>
              </div>

              <div className="form__group field">
                <textarea
                  className="form__field"
                  placeholder="Wiadomość"
                  name="message"
                  id="name"
                  required
                />
                <label htmlFor="message" className="form__label">
                  Wiadomość
                </label>
              </div>
            </form>
          </div>

          <div data-aos="fade-up" className="button-wrapper">
            <button onClick={sendForm} className="send_button">
              Prześlij wiadomość
            </button>
          </div>
          <AnimeBox>
            <p className="text">
              Wyjazd z Polski w każdy piątek, z Anglii w każdą niedzielę. Możliwość
              negocjacji cen, jesteśmy elastyczni na Twoje potrzeby.
            </p>
          </AnimeBox>
          <AnimeBox>
            <p className="text">Zniżka dla stałych klientów.</p>
          </AnimeBox>
        </div>

        <div className="footer-wrapper">
          <div className="icons-box fb">
            <img className="box-icon" src="../assets/fb-icon.png" alt="icon-facebook" />
          </div>
        </div>

        <div className="footer-data">
          <p className="ovner">Prezmak - 2023 firma-prezmak@tlen.pl</p>
          <p className="author">realizacja actionjacks22@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default BottomSection
