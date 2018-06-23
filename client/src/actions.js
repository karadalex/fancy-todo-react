export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';

export function fetchTodos() {
  const action = {
    type: FETCH_TODOS, 
    todos: []
  }
  fetch('/api/v1/todos')
      .then(res => res.json())
      .then(todos => action.todos = todos);

  return action;
}

export function addTodo(id) {
  const todo = {
    id, 
    title: "Todo",
    task:"New todo", 
    completed: false
  };
  return {
    type: ADD_TODO,
    todo
  }
}