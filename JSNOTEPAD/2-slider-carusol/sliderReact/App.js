import "./App.css";
import ImageSlider from "./components/ImageSlider";

//ref of slides obj
import SliderData from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
