import "./App.css";

import NewNavbar from "./components/NewNavbar";

function App() {
  return (
    <div className="App" id="outer-container" style={{ height: "100vh" }}>
      <NewNavbar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <div id="page-wrap">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque odit
          eveniet accusantium assumenda a alias laboriosam illo modi dolores
          facilis laudantium consequatur dolorem, excepturi, commodi inventore
          reiciendis rerum officia quibusdam?
        </h1>
      </div>
    </div>
  );
}

export default App;
