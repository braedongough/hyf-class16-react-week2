import { useState, useEffect } from 'react'
import './App.css'

function Counter({ updateCount, count, label }) {
    return (
        <div>
            <h1>{label}</h1>
            <button onClick={updateCount}>{count}</button>
        </div>
    )
}

// function CounterWithoutState() {
//     let count = 0

//     const updateCount = () => count + 1
//     return (
//         <Counter
//             count={count}
//             updateCount={updateCount}
//             label="Counter without state"
//         />
//     )
// }

function CounterWithState() {
    const [count, setCount] = useState(0)
    const updateCount = () => setCount(count + 1)

    return (
        <Counter
            count={count}
            updateCount={updateCount}
            label="Counter with state"
        />
    )
}

function Pokemon() {
    const [pokemonState, setPokemon] = useState()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [])

    if (!pokemonState) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{pokemonState.name}</h1>
            <img
                src={pokemonState.sprites.front_shiny}
                alt={`${pokemonState.name} sprite`}
            />
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Pokemon />
        </div>
    )
}

export default App
