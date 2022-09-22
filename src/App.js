import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/react-router" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;