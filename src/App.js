import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>

          <Routes>

                <Route path="/" element={<Home />}/>

                <Route path="/about" element={<About />}/>

                <Route path="/experience" element={<Experience />}/>

                <Route path="/projects" element={<Project />}/>

                <Route path="/contact" element={<Contact />}/>

          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
