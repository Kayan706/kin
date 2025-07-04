import './App.css';
import Header from './components/Header';
import ListSection from './components/ListSection'
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [formActive, setFormActive]=useState(false)
  return (
    <>
      <Header setFormActive={setFormActive}/>
      <ListSection/>
      <Form active={formActive} setActive={setFormActive}/>
    </>
  );
}

export default App;
