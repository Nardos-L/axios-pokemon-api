import React, { useState } from "react";
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        axios.get(' https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data.results))

    }

    return (
        <div >
            <input type="submit" value="Fetch Pokemon" onClick={handleClick} />

            {pokemon ? pokemon.map((p, index) => {
                return (
                    <div key={index}>
                        <li>{p.name}</li>
                    </div>
                )
            }) : null}

        </div>
    );
}
export default Pokemon;