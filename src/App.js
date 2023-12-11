import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Singlepage from "./components/Singlepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Singlepage />} />
      </Routes>
    </div>
  );
}

export default App;
