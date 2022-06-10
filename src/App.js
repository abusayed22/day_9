import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/partial/Header";
import Read from "./components/pages/Read";
import Add from "./components/pages/Add";

function App() {
  return (
    <div>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
