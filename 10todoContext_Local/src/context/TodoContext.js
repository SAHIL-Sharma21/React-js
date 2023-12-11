import { useContext, createContext } from 'react';

export const TodoContext = createContext({
    //making context model - but it will eventuly empty and we add when we use it
    todos: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],
    //writing function name but not write their functionality
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

});

export const useTodo = () => {
    return useContext(TodoContext); //jb bhi useContext lenge toh hme context pass krna zaroori hai. (ki kiske baare mei baat kr rahe hai)
}

export const TodoProvider = TodoContext.Provider;