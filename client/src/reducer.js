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
    default:
      return state;
  }
}