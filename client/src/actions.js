export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO_TITLE = 'CHANGE_TODO_TITLE';

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

export function changeTodoTitle(id, newTitle) {
  console.log(newTitle);
  return {
    type: CHANGE_TODO_TITLE,
    id,
    newTitle
  }
}