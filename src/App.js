import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about';
import NavigationBar from './components/NavigationBar';
import Implementation from './components/implementation';
import Track from './components/navComponents/track';
import Monitor from './components/navComponents/monitor';
import Optimize from './components/navComponents/optimize';
import Forecast from './components/navComponents/forecast';
import MyCard from './components/navComponents/cashchatAI';

import './App.css';

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <NavigationBar /><br></br>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/track" element={<Track />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/optimize" element={<Optimize />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/cashchat" element={<MyCard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
