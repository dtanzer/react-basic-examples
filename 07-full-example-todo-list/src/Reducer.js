import TodoActions from './TodoActions';

export function reducer(state, action) {
  switch(action.type) {
    case TodoActions.newTodoCreated:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { text: action.todoText, done: false }
        ]
      });
    case TodoActions.todoChecked:
      const newTodos = state.todos.map(todo => {
        if(todo.text === action.todoText) {
          return Object.assign({}, todo, {
            done: !todo.done
          });
        }
        return todo;
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    case TodoActions.inputTextChanged:
      return Object.assign({}, state, {
        inputText: action.newText
      })
    default:
      return state;
  }
}