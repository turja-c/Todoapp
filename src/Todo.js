import React, { useState } from "react";

function TodosComponent() {
    const [currentTodo, setCurrentTodo] = useState("");
    const [currentTodo2, setCurrentTodo2] = useState("");

    const[todos, setTodos] = useState([
        {
            todo: "1st",
            isCompleted: true
        },
        {
            todo: "2nd", 
            isCompleted: false
        },
        {
            todo: "3rd",
            isCompleted: false
        }
    ]);
    const[todos2, setTodos2] = useState([
        {
            todo2: "1st",
            isCompleted2: false
        },
        {
            todo2: "2nd", 
            isCompleted2: true
        },
        {
            todo2: "3rd",
            isCompleted2: false
        }
    ]);

    function createNewTodo(currentTodo) {
        let todosArray= [...todos];
        todosArray.push({
            todo: currentTodo,
            isCompleted: false
        });
        setTodos(todosArray);
    }
    function createNewTodo2(currentTodo2) {
        let todosArray2= [...todos2];
        todosArray2.push({
            todo2: currentTodo2,
            isCompleted2: false
        });
        setTodos2(todosArray2);
    }
    
    function completeTodo(index) {
        const todosArray = [...todos];
        todosArray[index].isCompleted = !todosArray[index].isCompleted;
        setTodos(todosArray);
    }
    function completeTodo2(index2) {
        const todosArray2 = [...todos2];
        todosArray2[index2].isCompleted2 = !todosArray2[index2].isCompleted2;
        setTodos2(todosArray2);
    }

    function deleteTodo(index) {
        let todosArray = [...todos];
        todosArray.splice(index, 1);
        setTodos(todosArray);
    }
    function deleteTodo2(index2) {
        let todosArray2 = [...todos2];
        todosArray2.splice(index2, 1);
        setTodos2(todosArray2);
    }

    return (
        <div>
            <div>
                <input className="todo-input" 
                value={currentTodo} 
                onChange={e=> {
                    setCurrentTodo(e.target.value);
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        createNewTodo(currentTodo);
                        setCurrentTodo("");
                    }
                }}
                placeholder="What needs to get done Today?"
                />
                {todos.map((todo, index) => (
                    <div key={todo} className="todo">
                        <div className="checkbox" onClick={() => completeTodo(index)}>
                            {todo.isCompleted && <span>&#x2714;</span>}
                        </div>
                    <div className={todo.isCompleted ? "done" : ""}> {todo.todo} </div>
                    <div className="delete" onClick={() => deleteTodo(index)}>
                        &#128465;
                    </div>
                </div>
            
                ))}
                {todos.length > 0 && `${todos.length} items`}
            </div>
                <br></br>
                <br></br>
           
            <div>
                <input className="todo-input" 
                value={currentTodo2} 
                onChange={e=> {
                    setCurrentTodo2(e.target.value);
                }}
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        createNewTodo2(currentTodo2);
                        setCurrentTodo2("");
                    }
                }}
                placeholder="What needs to get done Tomorrow?"
                />
                {todos2.map((todo2, index2) => (
                    <div key={todo2} className="todo">
                        <div className="checkbox" onClick={() => completeTodo2(index2)}>
                            {todo2.isCompleted2 && <span>&#x2714;</span>}
                        </div>
                    <div className={todo2.isCompleted2 ? "done" : ""}> {todo2.todo2} </div>
                    <div className="delete" onClick={() => deleteTodo2(index2)}>
                        &#128465;
                    </div>
                </div>
            
                ))}
                {todos2.length > 0 && `${todos2.length} items`}
            </div>
    </div>
        
    );
}

export default TodosComponent;