import TodoActions from './TodoActions';

const initialState = [
  { text: "Buy Milk", done: true },
  { text: "Buy Beer", done: true },
  { text: "Write workshop examples", done: false},
  { text: "Host workshop", done: false }
];

export function reducer(state = initialState, action) {
  switch(action.type) {
    case TodoActions.todoStateToggled:
      const newTodos = state.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === action.text) {
          newTodo.done = !newTodo.done;
          return newTodo;
        }
        return newTodo;
      });
      return newTodos;
    case TodoActions.newTodoCreated:
      return [
        ...state,
        { text: action.text, done: false }
      ];
    default:
      return state;
  }
}
