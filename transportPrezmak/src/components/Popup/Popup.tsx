import '../../components/Popup/popup.scss'

type PopupProps = {
  state?: boolean
  infoText?: string
}

function Popup({ state, infoText }: PopupProps) {
  return (
    <>
      <div className={`popup-content ${state ? 'show' : 'hide'}`}>
        <p>{infoText}</p>
      </div>
    </>
  )
}

export default Popup
