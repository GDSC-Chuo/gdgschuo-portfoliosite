import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import Portfolio from './pages/Portfolio';
import Study from './pages/Study';
import Production from './pages/Production';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/study" element={<Study />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;