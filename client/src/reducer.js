const initialState = {
  todos: []
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_TODOS':
      return {
        todos: action.todos
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      }
    case 'CHANGE_TODO_TITLE':
      var todos = state.todos;
      todos[action.id-1].title = action.newTitle;
      return {
        ...state,
        todos
      }
    default:
      return state;
  }
}