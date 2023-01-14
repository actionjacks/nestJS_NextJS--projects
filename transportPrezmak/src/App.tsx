import './App.scss'

import AnimeBox from './components/AnimBox/AnimeBox'
import CircleIndicator from './components/CircleIndicator'
import Draw from './components/Draw'

const App = () => {
  return (
    <div className="App">
      <CircleIndicator backGroundColor={'black'} />

      <AnimeBox>
        <Draw />
      </AnimeBox>

      <AnimeBox>
        <h1>lorem</h1>
      </AnimeBox>

      <AnimeBox>
        <h1>lorem</h1>
      </AnimeBox>
    </div>
  )
}

export default App
