import { useState, useEffect } from 'react'
import WatchCount from './WatchCount'
import { Pokemon } from './pokemon'
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

function App() {
    return (
        <div className="App">
            <WatchCount />
        </div>
    )
}

export default App
