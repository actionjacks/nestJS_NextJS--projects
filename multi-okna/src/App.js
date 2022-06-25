import NavbarMobile from "./components/navbar/NavbarMobile";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Routes from "./routes";

function App() {
  return (
    <div className="App" id="outer-container" style={{ overflow: "hidden" }}>
      <NavbarMobile
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <div id="page-wrap">
        <Navbar />
      </div>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
