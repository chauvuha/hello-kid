import './App.css';
import Home from './components/pages/Home/home';
import Faqs from './components/pages/Faqs/Faqs';
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
          <Route path="/faqs" element={<Faqs />}></Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
