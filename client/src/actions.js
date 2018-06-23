export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';

export function loadFetchedTodos(todos) {
  return {
    type: FETCH_TODOS,
    todos
  }
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