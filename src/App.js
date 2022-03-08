import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';

import logo from './logo.svg';
import './App.css';

import NavBar from './components/layout/NavBar.js';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <NavBar />

      <Container>       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/novidades"/>
          <Route path="/maisvistos"/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
