import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main.js'
import Contact from './Contact.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
