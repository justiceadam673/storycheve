import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import NotfoundPage from "./components/NotfoundPage";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<MainBody />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
