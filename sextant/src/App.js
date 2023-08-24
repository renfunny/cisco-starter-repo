import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import Address from "./components/Address";
import Latency from "./components/Latency";
function App() {
  return (
    <div className="App">
      <Banner text="SEXTANT" />
      <div className="Content">
        <Exhibit header="IPv4 Address">
          <Address url="https://api.ipify.org?format=json" />
        </Exhibit>
        <Exhibit header="IPv6 Address">
          <Address url="https://api64.ipify.org?format=json" />
        </Exhibit>
        <Exhibit header="Packet Latency">
          <Latency />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
