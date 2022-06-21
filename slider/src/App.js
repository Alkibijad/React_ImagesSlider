import "./App.css";
import { Route, Routes } from "react-router-dom";
import Slider from "./Slider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Slider />}></Route>
      </Routes>
    </div>
  );
}

export default App;
