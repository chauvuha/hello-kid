import './App.css';
import Home from './components/pages/Home/home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
