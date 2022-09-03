// import Accordion from 'react-bootstrap/Accordion';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Results from './Results';
import Home from './Home';
import MultiStorePage from './MultiStorePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results/:id" element={<Results/>}/>
        <Route path="/search/:store/:zipCode" element={<MultiStorePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
