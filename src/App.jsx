import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import PersonalAccount from './pages/PersonalAccount';

function App() {
  const [formActive, setFormActive] = useState(false);

  return (
    <>
      <Header setFormActive={setFormActive} />

      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/personalAccount" element={<PersonalAccount />} />
      </Routes>

      
      <Form active={formActive} setActive={setFormActive} />
    </>
  );
}

export default App;