import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <Router>
                  <Navbar />
        <Routes>
          <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

