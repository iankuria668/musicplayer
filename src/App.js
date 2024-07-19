import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Library from './screens/Library';
import Search from './screens/Search';
import Notfound from './screens/Notfound';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
