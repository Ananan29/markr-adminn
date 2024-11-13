import React,{useState} from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminAboutPage from './components/AdminAboutPage/AdminAboutPage';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import reportwebvitals from "./reportwebVitals";
function App() {
  const [isadminauthenticated, setisadminauthenticated] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isadminauthenticated={isadminauthenticated} setisadminauthenticated={setisadminauthenticated}/>
      <br/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<AdminAboutPage/>}/>
        <Route path="/contact" element= {<Contact isadminauthenticated={isadminauthenticated}/>}/>
      </Routes>
      </BrowserRouter>
      {/* <p>vchfvgfty</p>hvgnb */}
    </div>
  );
}

export default App;