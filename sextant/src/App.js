import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner title="Sextant by Cisco" />
      <Exhibit header="Header" />
    </div>
  );
}

export default App;
