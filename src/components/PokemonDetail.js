    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import axios from 'axios'; 

    function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <h3>Abilities:</h3>
        <ul>
            {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
            ))}
        </ul>
        </div>
    );
    }

    export default PokemonDetail;
