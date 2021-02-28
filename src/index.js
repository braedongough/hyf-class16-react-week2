import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import Todos from './todos'

// const todos = [
//     {
//         description: 'Get out of bed',
//         deadline: 'today',
//         id: 123,
//     },
//     {
//         description: 'brush teeth',
//         deadline: 'this morning',
//         id: 456,
//     },
// ]

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
