import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing_page from './Landing_Page/landing_page';
import Postview from './PostView/post_view';
import Userform from './Form/form';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path='posts' element={<Postview />} />
        <Route path='form' element={<Userform />} />
        <Route path="/*" element={<h1>Error: 404, Page Not Found !</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
