
const initialState = {
  todos: []
};

export function reducer(state=initialState, action) {
  switch(action.type) {
    case 'TODOS_LOADED':
      return Object.assign({}, state, {
        todos: action.todos
      });
    default:
      return state;
  }
}
