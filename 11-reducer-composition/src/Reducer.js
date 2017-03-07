import TodoActions from './TodoActions';

export function reducer(state, action) {
  switch(action.type) {
    case TodoActions.todoStateToggled:
      const newTodos = state.todos.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === action.text) {
          newTodo.done = !newTodo.done;
          return newTodo;
        }
        return newTodo;
      });
      return Object.assign({}, state, {
        todos: newTodos
      });
    case TodoActions.newTodoCreated:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          { text: action.text, done: false }
        ],
        newTodo: { text: "" }
      });
    case TodoActions.newTodoTextChanged:
      return Object.assign({}, state, {
        newTodo: { text: action.text }
      });
    case TodoActions.tabSwitched:
      return Object.assign({}, state, {
        tabs: { activeTab: action.tab }
      });
    default:
      return state;
  }
}