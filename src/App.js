import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RootComponent from "./components/ContextAPIInter/RootComponent";

// import ParentCompConAPI from "./components/ContextAPIBeginner.js/ParentCompConAPI";
// import ParentCompCtoC from "./components/ChildToChild.js/ParentCompCtoC";
// import ParentCompCtoP from "./components/ChildToParent/ParentCompCtoP";
// import ParentComp from "./components/ParentToChild.js/ParentComp";

function App() {
  return (
    <div className="App">
      <center>
        {/* <ParentComp />
        <ParentCompCtoP />
        <ParentCompCtoC />
        <ParentCompConAPI /> */}
        <RootComponent />
      </center>
    </div>
  );
}

export default App;
