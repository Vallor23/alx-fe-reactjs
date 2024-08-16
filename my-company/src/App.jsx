import {  Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Services from "./components/Services"
import Navbar from "./components/Navbar"

function App() {

  return (
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      </div>
  )
}

export default App
