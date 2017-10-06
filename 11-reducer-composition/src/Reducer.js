import TodoActions from './TodoActions';

const initialState = {
  todos: [
    { text: "Buy Milk", done: true },
    { text: "Buy Beer", done: true },
    { text: "Write workshop examples", done: false},
    { text: "Host workshop", done: false }
  ],
  newTodo: { text: "" },
  tabs: { activeTab: "all" }
};

export function reducer(state = initialState, action) {
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