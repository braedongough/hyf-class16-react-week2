function Todo({ description, deadline }) {
    return (
        <div>
            <h2>{description}</h2>
            <div>{deadline}</div>
        </div>
    )
}

function Todos({ todos }) {
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    description={todo.description}
                    deadline={todo.deadline}
                ></Todo>
            ))}
        </div>
    )
}

export default Todos
