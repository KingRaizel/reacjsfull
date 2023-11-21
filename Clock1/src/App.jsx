import Currenttime from "./components/content.jsx";
import Name from "./components/name.jsx";
import Subhead from "./components/subhead.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="container text-center">
      <Name />
      <Subhead />
      <Currenttime />
    </center>
  );
}

export default App;
