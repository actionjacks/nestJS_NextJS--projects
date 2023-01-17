import './header.scss'

import MotionBox from '../AnimBox/MotionBox'
import { Section1 } from '../Api/Api'

type HeaderProps = Section1

function Header({ title, telPL, telUK }: HeaderProps) {
  return (
    <header className="header">
      <MotionBox motionPathLength={100}>
        <p className="title">{title}</p>
      </MotionBox>
      <MotionBox motionPathLength={100}>
        <div className="flex">
          <div className="phone-card">
            <img className="img" src="./assets\icons8-poland-100.png" alt="poland-flag" />
            <a className="link" href={`tel:${telPL}`}>
              {telPL}
            </a>
          </div>
          <div className="phone-card">
            <img className="img" src="./assets\icons8-great-britain-100.png" alt="" />
            <a className="link" href={`tel:${telUK}`}>
              {telUK}
            </a>
          </div>
        </div>
      </MotionBox>
    </header>
  )
}

export default Header
