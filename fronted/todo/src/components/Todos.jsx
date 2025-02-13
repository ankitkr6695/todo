 function todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >{todo.completed==true? "completed" : "mark as completed"}</button>
            </div>
        })}
    </div>
}

export default todos;