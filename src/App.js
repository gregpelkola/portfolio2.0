import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </div>
  );
}
export default App;