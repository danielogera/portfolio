import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Pages
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' index element={<About/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/certificates" element={<Certificates/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
