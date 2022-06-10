import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/partial/Header";
import Read from "./components/pages/Read";
import Add from "./components/pages/Add";
import axios from "axios";
import Single from "./components/pages/Single";


function App() {

  axios.defaults.baseURL = "http://127.0.0.1:8000";
  axios.defaults.headers.post['Accept'] = "application/json";

  
  return (
    <div>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/add" element={<Add />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
