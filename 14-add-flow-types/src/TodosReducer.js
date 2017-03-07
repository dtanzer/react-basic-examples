import TodosActions from './TodosActions';
import NewTodoActions from './NewTodoActions';

const initialState = {
  all: [
      { text: "Buy Milk", done: true },
      { text: "Buy Beer", done: true },
      { text: "Write workshop examples", done: false},
      { text: "Host workshop", done: false }
    ]
};
export function todosReducer(state = initialState, action) {
  switch(action.type) {
    case TodosActions.todoStateToggled:
      const newTodos = state.all.map(todo => {
        const newTodo = Object.assign({}, todo);
        if(newTodo.text === action.text) {
          newTodo.done = !newTodo.done;
          return newTodo;
        }
        return newTodo;
      });
      return Object.assign({}, state, {
        all: newTodos
      });
    case NewTodoActions.newTodoCreated:
      return Object.assign({}, state, {
        all: [
          ...state.all,
          action.todo
        ]
      });
    default:
      return state;
  }
}