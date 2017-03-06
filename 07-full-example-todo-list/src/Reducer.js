import TodoActions from './TodoActions';

export function reducer(state, action) {
  switch(action.type) {
    case TodoActions.todoStateToggled:
      const newTodos = state.todos.map(todo => {
        if(todo.text === action.text) {
          todo.done = !todo.done;
          return todo;
        }
        return todo;
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    case TodoActions.newTodoCreated:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { text: action.text, done: false }
        ]
      });
    case TodoActions.newTodoTextChanged:
      return Object.assign({}, state, {
        newTodo: { text: action.text }
      })
    default:
      return state;
  }
}