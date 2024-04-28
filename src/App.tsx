import { Routes, Route, } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Doctors from "./pages/Doctors"
import ContactMe from "./pages/ContactMe"
import Services from "./pages/Services"
import Nurses from "./pages/Nurses"
import Departments from "./pages/Departments"


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />


      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/nurses" element={<Nurses />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>


      <Footer />
    </div>
  );
}


export default App
