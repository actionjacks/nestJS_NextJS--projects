import './App.scss'

import BoxWrapper from './components/BoxWrapper/BoxWrapper'
import CircleIndicator from './components/CircleIndicator'

const App = () => {
  return (
    <div className="App">
      <CircleIndicator />

      <BoxWrapper number={1} />
      <BoxWrapper number={2} />
      <BoxWrapper number={3} />
    </div>
  )
}

export default App
