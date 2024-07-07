import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Skills} from './components/Skills';
import {Experience} from './components/Experience';
import {Education} from './components/Education';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {Blog} from './components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" Component={Blog}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
