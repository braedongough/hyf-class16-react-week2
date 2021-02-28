import { useState, useEffect } from 'react'

function PokemonName({ name }) {
    return <h1>{name}</h1>
}

function PokemonSprite({ src, name }) {
    return <img src={src} alt={`${name} sprite`} />
}

export function Pokemon() {
    const [pokemonState, setPokemon] = useState()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [])

    if (!pokemonState) {
        return <p>loading..</p>
    }

    return (
        <div>
            <PokemonName name={pokemonState.name} />
            <PokemonSprite
                src={pokemonState.sprites.front_shiny}
                name={pokemonState.name}
            />
        </div>
    )
}
