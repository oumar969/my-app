import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importer CSS-filen

import './components/About'; 
import './components/Pokedex'; 

function  Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Pokedex">Pokédex</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;