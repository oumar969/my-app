import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/Pokedex.css';
function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${(currentPage - 1) * 20}`);
        setPokemonList(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 20));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pokedex-container">
      <h1 className="pokedex-title">Pokédex</h1>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`} className="pokemon-link">
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {currentPage !== 1 && (
          <button onClick={goToPreviousPage}>Previous</button>
        )}
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        {currentPage !== totalPages && (
          <button onClick={goToNextPage}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Pokedex;